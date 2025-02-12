function gerarPdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const larguraPagina = doc.internal.pageSize.getWidth();
    const margem = 10;
    const linhaAltura = 6;
    let posY = margem + 10;

    const titulo = "Cardápio da Semana";
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    const larguraTexto = doc.getTextWidth(titulo);
    const xInicialTitulo = (larguraPagina - larguraTexto) / 2;
    doc.text(titulo, xInicialTitulo, posY);

    posY += linhaAltura;
    doc.line(margem, posY, larguraPagina - margem, posY);

    posY += 10;

    const almocosContainer = document.getElementById('almocos');
    const cards = almocosContainer.querySelectorAll('.card');

    cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1;

        let dia = card.querySelector('.card-title').innerText;

        const alturaTabela = card.querySelectorAll('table tbody tr').length * 10 + 20; // Altura estimada da tabela
        const alturaCabecalho = 20; 

        if (posY + alturaCabecalho + alturaTabela > doc.internal.pageSize.getHeight() - margem) {
            doc.addPage();
            posY = margem + 10;
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text(dia, margem, posY);
        posY += linhaAltura;

        doc.setFontSize(12);
        doc.text("Almoço:", margem, posY);
        posY += linhaAltura;

        const linhas = card.querySelectorAll('table tbody tr');
        const dados = [];

        linhas.forEach(linha => {
            const alimento = linha.querySelector('td:nth-child(1)').innerText;
            const quantidade = linha.querySelector('td:nth-child(2)').innerText;
            dados.push([alimento, quantidade]);
        });

        doc.autoTable({
            startY: posY,
            head: [['Alimento', 'Quantidade']],
            body: dados,
            theme: 'grid', 
            headStyles: { fillColor: [64, 64, 64] }, 
            bodyStyles: { fillColor: [255, 255, 255], textColor: [0, 0, 0] }, 
            margin: { left: margem, right: margem }
        });

        posY = doc.autoTable.previous.finalY + 10;
    });

    const numeroPaginas = doc.internal.getNumberOfPages();
    for (let i = 1; i <= numeroPaginas; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.text(`${i}`, larguraPagina - margem - 10, doc.internal.pageSize.getHeight() - margem);
    }

    doc.save('Cardápio.pdf');
}