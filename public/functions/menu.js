function criarAlmoco() {
    const proteinas = [
        { Alimento: "Filé de Frango", Quantidade: "100g", Tipo: "Proteína" },
        { Alimento: "Filé de Peixe", Quantidade: "120g", Tipo: "Proteína" },
        { Alimento: "Filé mignion", Quantidade: "100g", Tipo: "Proteína" },
        { Alimento: "Patinho", Quantidade: "80g", Tipo: "Proteína" },
        { Alimento: "Camarão", Quantidade: "100g", Tipo: "Proteína" },
    ];

    const carboidratos = [
        { Alimento: "Purê de Batata", Quantidade: "250g", Tipo: "Carboidrato" },
        { Alimento: "Purê de Aipim", Quantidade: "250g", Tipo: "Carboidrato" },
        { Alimento: "Macarrão", Quantidade: "120g", Tipo: "Carboidrato" },
        { Alimento: "Arroz Branco", Quantidade: "100g", Tipo: "Carboidrato" },
    ];

    const feijoes = [
        { Alimento: "Feijão Preto", Quantidade: "65g", Tipo: "Feijão" },
        { Alimento: "Feijão Fradinho", Quantidade: "65g", Tipo: "Feijão" },
    ];

    const legumes = [
        { Alimento: "Tomate", Quantidade: "90g", Tipo: "Legume" },
        { Alimento: "Cenoura", Quantidade: "75g", Tipo: "Legume" },
        { Alimento: "Brócolis Cozido", Quantidade: "120g", Tipo: "Legume" },
        { Alimento: "Batata", Quantidade: "50g", Tipo: "Legume" },
        { Alimento: "Salada de Tomate e Milho", Quantidade: "100g", Tipo: "Legume" },

    ];

    const folhosos = [
        { Alimento: "Couve", Quantidade: "2 colheres de sopa", Tipo: "Folhoso" },
        { Alimento: "Alface Americana", Quantidade: "4 folhas", Tipo: "Folhoso" },
    ];

    const almoco = [
        proteinas[Math.floor(Math.random() * proteinas.length)],
        carboidratos[Math.floor(Math.random() * carboidratos.length)],
        feijoes[Math.floor(Math.random() * feijoes.length)],
        legumes[Math.floor(Math.random() * legumes.length)],
        folhosos[Math.floor(Math.random() * folhosos.length)],
    ];

    return almoco;
}

function criarCardapioSemanal() {
    const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
    const almocos = diasDaSemana.map(dia => ({
        DiaDaSemana: dia,
        Alimentos: criarAlmoco()
    }));

    return almocos;
}

document.addEventListener('DOMContentLoaded', function() {
    const almocosContainer = document.getElementById('almocos');
    const btnCarregar = document.getElementById('carregarAlmocos');
    const btnGerarPDF = document.getElementById('gerarPDF');

    btnCarregar.addEventListener('click', function() {
        mostrarAlmocos();
        btnGerarPDF.style.display = 'block'; 
    });

    btnGerarPDF.addEventListener('click', function() {
        const almocos = criarCardapioSemanal();
    });

    function mostrarAlmocos() {
        const almocos = criarCardapioSemanal();
        almocosContainer.innerHTML = '';
        almocos.forEach(almoco => {
            almocosContainer.innerHTML += criarCardHTML(almoco);
        });
        document.getElementById('tituloCardapio').style.display = 'block';
    }

    function criarCardHTML(almoco) {
        let cardHTML = `<div class="card mb-4 bg-dark text-white">
                            <div class="card-body">
                                <h3 class="card-title text-center mb-3">
                                    <span class="badge bg-secondary">${almoco.DiaDaSemana}</span>
                                </h3>
                                <div class="card-header bg-secondary text-white">
                                    <h4 class="mb-0">Almoço:</h4>
                                </div>
                                <ul class="list-group list-group-flush">`;
        almoco.Alimentos.forEach(alimento => {
            cardHTML += `<li class="list-group-item bg-dark text-white">${alimento.Alimento}: ${alimento.Quantidade}</li>`;
        });
        cardHTML += `    </ul>
                      </div>
                    </div>`;
        return cardHTML;
    }    
});


