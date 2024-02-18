const billChange = document.getElementById('bill');
const peopleChange = document.getElementById('people');
const selectTipChange = document.querySelectorAll('.button-tip');
const selectTipChangeCustom = document.getElementById('select-tip-custom');
const resetButton = document.getElementById('button-reset');

const pTipAmountPerson = document.querySelector(`#p-tip-amount-person`);
const pTipAmountTotal = document.querySelector(`#p-tip-amount-total`);

let tipNumber;

billChange.addEventListener("change", () => {

    const billNumber = document.getElementById('bill').value;

    if (billNumber === '0' || billNumber < 0) {
        
        billChange.style.outline = 'red solid 2px';
        window.alert("Veuillez mettre une valeur supérieure à 0 !");
        
    } else if (billNumber == '' || billNumber > 0) {

         billChange.style.outline = ''
         
    }

    calcul();
    
});

peopleChange.addEventListener("change", () => {

    const peopleNumber = document.getElementById('people').value;

    if (peopleNumber === '0' || peopleNumber < 0) {

        peopleChange.style.outline = 'red solid 2px';
        window.alert("Veuillez mettre une valeur supérieure à 0 !");
        
    } else if (peopleNumber == '' || peopleNumber > 0) {

        peopleChange.style.outline = ''
        

    }

    calcul();
    
});

selectTipChangeCustom.addEventListener("change", () => {

    const tipNumberCustom = document.getElementById('select-tip-custom').value;

    if (tipNumber !== '') {
        selectTipChange.forEach(function (btn) {
            btn.classList.remove('active');
          });
        tipNumber = '';
    }

    if (tipNumberCustom === '0' || tipNumberCustom < 0) {

        selectTipChangeCustom.style.outline = 'red solid 2px';
        window.alert("Veuillez mettre une valeur supérieure à 0 !");
        
    } else if (tipNumberCustom > 99) {

        selectTipChangeCustom.style.outline = 'red solid 2px';
        window.alert("Veuillez mettre une valeur inférieur à 99 !");

    } else if (tipNumberCustom == '' || tipNumberCustom > 0) {

        selectTipChangeCustom.style.outline = '';
        
    }

    calcul();
    
});

selectTipChange.forEach(function (buttonTip) {
    buttonTip.addEventListener('click', function () {
      // Remove the 'active' class from all buttons
      selectTipChange.forEach(function (btn) {
        btn.classList.remove('active');
      });
  
      // Add the 'active' class to the clicked button
      this.classList.add('active');
  
      tipNumber = this.value;
  
      // Check if the input has a value
      if (selectTipChangeCustom.value !== '') {
        // If input has a value, clear it
        selectTipChangeCustom.value = '';
      }
  
      calcul();
    });
});

resetButton.addEventListener("click", () => {
    billChange.value = "";
    peopleChange.value = "";
    selectTipChange.forEach(function (btn) {
        btn.classList.remove('active');
      });
    tipNumber = "";
    selectTipChangeCustom.value = "";
    billChange.style.outline = '';
    peopleChange.style.outline = '';
    selectTipChangeCustom.style.outline = '';
    calcul();
});

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

    if (billNumber <= 0 || peopleNumber <= 0 || tipResult <= 0 || tipResult == undefined) {

        const HTMLTipAmountPerson = `
        $0.00
        `;

        const HTMLTotalPerson = `
        $0.00
        `;

        pTipAmountPerson.innerHTML = HTMLTipAmountPerson;
        pTipAmountTotal.innerHTML = HTMLTotalPerson;
    }

    console.log("<------------Résultats finale-------->");
    console.log(tipAmountPerson);
    console.log(totalPerson);

}