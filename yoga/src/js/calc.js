function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDay = document.querySelectorAll('.counter-block-input')[1],
        calcInput = document.querySelector('#price');
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    function changeInput() {
        daysSum = +restDay.value;
        personsSum = +persons.value;
        total = (daysSum + personsSum) * 4000;

        if (restDay.value != '' && persons.value != '') {
            changeBase();
        } else {
            totalValue.innerHTML = 0;
        }
    }

    function changeBase() {
        if (restDay.value != '' && persons.value != '') {
            let a = total;
            totalValue.innerHTML = a * place.options[place.selectedIndex].value;
        } else {
            totalValue.innerHTML = 0;
        }
    }

    calcInput.addEventListener('input', (e) => { if(e.target.tagName == 'INPUT') {changeInput()} });

    place.addEventListener('change', changeBase);
}

module.exports = calc;