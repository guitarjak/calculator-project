let calculation = localStorage.getItem('calculation') || '';

displayResult();

function updateCalculation(value) {
    calculation += value;
    console.log(calculation);
    displayResult();
    localStorage.setItem('calculation', calculation);
}

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}

      /*
      Psuedocode
      1.Display every number pressed.
      2.Display result when = is pressed.
      3.If there's data in the local storage, display it.
      4.If clear is pressed, remove everything
      */
function displayResult() {
    document.querySelector('.js-text-display').innerHTML = calculation;
}