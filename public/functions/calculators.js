// Protein Calculator
document.getElementById("proteinCalculator").addEventListener("submit", function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("protein-body-weight").value);
    const proteinFactor = parseFloat(document.getElementById("activity-level").value);
    const resultDiv = document.getElementById("proteinResult");

    if (!isNaN(weight)) {
        const proteinNeed = (weight * proteinFactor).toFixed(1);
        document.getElementById("proteinResult").innerHTML = `Você precisa de <strong>${proteinNeed}g</strong> de proteína por dia.`;
    } else {
        document.getElementById("proteinResult").innerHTML = `<span class="text-danger">Por favor, insira um peso válido.</span>`;
    }

    resultDiv.classList.remove("d-none");
});

// Water Calculator
document.getElementById("waterCalculator").addEventListener("submit", function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("water-body-weight").value);

    if (!isNaN(weight)) {
        const waterNeedMl = weight * 40; 

        const waterNeedLiters = (waterNeedMl / 1000).toFixed(1);

        document.getElementById("waterResult").innerHTML = `Você precisa ingerir <strong>${waterNeedLiters} litros</strong> de água por dia.`;
        document.getElementById("waterResult").classList.remove("d-none");
    } else {
        document.getElementById("waterResult").innerHTML = `<span class="text-danger">Por favor, insira um peso válido.</span>`;
        document.getElementById("waterResult").classList.remove("d-none");
    }
});