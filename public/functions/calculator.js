document.getElementById("resourceCalculator").addEventListener("submit", function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("body-weight").value);
    const proteinFactor = parseFloat(document.getElementById("activity-level").value);
    const resultDiv = document.getElementById("result"); 

    if (!isNaN(weight)) {
        const proteinNeed = (weight * proteinFactor).toFixed(1);
        const waterNeedMl = weight * 40; 
        const waterNeedLiters = (waterNeedMl / 1000).toFixed(1);
        resultDiv.innerHTML = `
            <div class="card bg-dark text-white border-0">
                <div class="card-header bg-secondary text-white mb-0">
                    <h4 class="mb-0">Consumo Diário Recomendado</h4>
                </div>
                <table class="table table-dark table-bordered mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Recurso</th>
                            <th scope="col">Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Proteína</td>
                            <td>${proteinNeed}g</td>
                        </tr>
                        <tr>
                            <td>Água</td>
                            <td>${waterNeedLiters}l</td>
                        </tr>
                    </tbody>
                </table>
            </div>`;      
    } else {
        resultDiv.innerHTML = `<span class="text-danger">Por favor, insira um peso válido.</span>`;
    }

    resultDiv.classList.remove("d-none");
});