function gerarPdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const larguraPagina = doc.internal.pageSize.getWidth();
    const alturaPagina = doc.internal.pageSize.getHeight();
    const margem = 10;
    const margemDireita = larguraPagina - margem;
    const margemBaixo = alturaPagina - margem;
    const linhaAltura = 6;
    let posY = margem + 10;

    const titulo = "Cardápio da Semana";
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    const larguraTexto = doc.getTextWidth(titulo);
    const xInicialTitulo = (larguraPagina - larguraTexto) / 2;
    doc.text(titulo, xInicialTitulo, posY);

    posY += linhaAltura;
    doc.line(margem, posY, margemDireita, posY);

    posY += 10;

    const almocosContainer = document.getElementById('almocos');
    const cards = almocosContainer.querySelectorAll('.card');

    cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1;

        if (isLastCard) {
            doc.addPage();
            posY = margem + 10;
        }

        if (posY > margemBaixo - 40 && !isLastCard) { 
            doc.addPage();
            posY = margem + 10;
        }

        let dia = card.querySelector('.card-title').innerText;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text(dia, margem, posY);
        posY += linhaAltura;

        doc.setFontSize(12);
        doc.text("Almoço:", margem + 5, posY);
        posY += linhaAltura;

        doc.setFont("helvetica", "normal");
        let itens = card.querySelectorAll('.list-group-item');
        itens.forEach(item => {
            if (posY > margemBaixo - 10) {
                doc.addPage();
                posY = margem + 10;
            }

            doc.text(item.innerText, margem + 10, posY);
            posY += linhaAltura;
        });

        posY += 10;
    });

    const numeroPaginas = doc.internal.getNumberOfPages();
    for (let i = 1; i <= numeroPaginas; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.text(`${i}`, larguraPagina - margem - 10, margemBaixo);
    }

    doc.save('Cardápio.pdf');
}
