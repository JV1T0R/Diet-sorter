function gerarPdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);

    const titulo = "Cardápio da Semana";
    const larguraPagina = doc.internal.pageSize.getWidth();
    const margem = 10;
    const posicaoTituloY = 15;

    const larguraTexto = doc.getStringUnitWidth(titulo) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const xInicialTitulo = (larguraPagina - larguraTexto) / 2;

    doc.text(titulo, xInicialTitulo, posicaoTituloY);

    doc.setFontSize(12);  

    let posY = posicaoTituloY + 20; 

    const almocosContainer = document.getElementById('almocos');
    const cards = almocosContainer.querySelectorAll('.card');

    cards.forEach(card => {
        let dia = card.querySelector('.card-title').innerText;
        
        doc.setFont("helvetica", "bold");
        doc.text(dia, margem, posY); 
        posY += 6; 
        
        doc.text("Almoço:", margem + 5, posY); 
        posY += 6; 

        doc.setFont("helvetica", "normal");  
        let itens = card.querySelectorAll('.list-group-item');
        itens.forEach(item => {
            doc.text(item.innerText, margem + 10, posY);  
            posY += 6;  
        });

        posY += 10;  

        if (posY > doc.internal.pageSize.getHeight() - 20) {
            doc.addPage();
            posY = 10;  
        }
    });

    doc.save('Cardápio.pdf');
}
