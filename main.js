const billChange = document.getElementById('bill');
const peopleChange = document.getElementById('people');
const selectTipChange = document.querySelectorAll('.button-tip');
const selectTipChangeCustom = document.getElementById('select-tip-custom');

let tipNumber;


function calcul() {
    const billNumber = document.getElementById('bill').value;
    const peopleNumber = document.getElementById('people').value;
    const tipNumberCustom = document.getElementById('select-tip-custom').value;


    console.log("<-------------------------------------->")
    console.log("La valeur : ",billNumber);
    console.log("Nombre de personnes : ",peopleNumber);
    console.log("Tip % : ",tipNumber);
    console.log("Tip % Custom : ",tipNumberCustom);
}

billChange.addEventListener("change", () => {
    calcul();
});

peopleChange.addEventListener("change", () => {
    calcul();
});

selectTipChangeCustom.addEventListener("change", () => {

    if (tipNumber !== '') {
        tipNumber = '';
    }
    calcul();
});

selectTipChange.forEach(function(buttonTip) {
    buttonTip.addEventListener('click', function() {
            
            tipNumber = this.value;

            // Check if the input has a value
            if (selectTipChangeCustom.value !== '') {
                // If input has a value, clear it
                selectTipChangeCustom.value = '';
                
            }

            calcul();
    });
});