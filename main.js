const billChange = document.getElementById('bill');
const peopleChange = document.getElementById('people');
const selectTipChange = document.querySelectorAll('.button-tip');
const selectTipChangeCustom = document.getElementById('select-tip-custom');

const pTipAmountPerson = document.querySelector(`#p-tip-amount-person`);
const pTipAmountTotal = document.querySelector(`#p-tip-amount-total`);

let tipNumber;


function calcul() {
    const billNumber = document.getElementById('bill').value;
    const peopleNumber = document.getElementById('people').value;
    const tipNumberCustom = document.getElementById('select-tip-custom').value;
    
    let tipResult;
    let tipAmountPerson;
    let totalPerson;

   /* Choix du % finale */

    if (tipNumber > 0) {
        tipResult = tipNumber;

    } else if (tipNumberCustom >= 10 && tipNumberCustom <= 99) {
        tipResult = tipNumberCustom;
    } else if (tipNumberCustom > 0 && tipNumberCustom < 10) {
        tipResult = `0${tipNumberCustom}`;
    }

    console.log("<---------------Checks %------------->");

    console.log(tipResult);

    /* Fin Choix du % finale */

    if (billNumber > 0 && peopleNumber > 0 && tipResult > 0) {
        tipAmountPerson = (billNumber / peopleNumber) * `0.${tipResult}`;
        totalPerson = (billNumber / peopleNumber) * `1.${tipResult}`;

        const HTMLTipAmountPerson = `
        $${tipAmountPerson.toFixed(2)}
        `;

        const HTMLTotalPerson = `
        $${totalPerson.toFixed(2)}
        `;

        pTipAmountPerson.innerHTML = HTMLTipAmountPerson;
        pTipAmountTotal.innerHTML = HTMLTotalPerson;
    }



    console.log("<------------Résultats finale-------->");
    console.log(tipAmountPerson);
    console.log(totalPerson);

    /*console.log("<---------------Checks les valeurs------------->");
    console.log("La valeur : ",billNumber);
    console.log("Nombre de personnes : ",peopleNumber);
    console.log("Tip % : ",tipNumber);
    console.log("Tip % Custom : ",tipNumberCustom);*/
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

            // Set the background color of the clicked button
            buttonTip.style.backgroundColor = 'hsl(172, 67%, 45%)'; // Replace 'your-desired-color' with the color you want
            buttonTip.style.color = 'hsl(0, 0%, 100%)';


            if (selectedButton) {
                selectedButton.style.backgroundColor = ''; // Set to default or any desired color
              }

            // Update the selected button
            selectedButton = buttonTip;

            // Check if the input has a value
            if (selectTipChangeCustom.value !== '') {
                // If input has a value, clear it
                selectTipChangeCustom.value = '';
                
            }

            calcul();
    });
});

console.log("----- Test ------");
        console.log(pTipAmountPerson);
        console.log(pTipAmountTotal);
        console.log("----- Fin Test ------");