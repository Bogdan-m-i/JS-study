var btnStart = document.querySelector('#start'),

    valBudget = document.querySelector('.budget-value'),
    valDayBudget = document.querySelector('.daybudget-value'),
    valLevel = document.querySelector('.level-value'),
    valExp = document.querySelector('.expenses-value'),
    valOptExp = document.querySelector('.optionalexpenses-value'),
    valInc = document.querySelector('.income-value'),
    valMothSav = document.querySelector('.monthsavings-value'),
    valYearSav = document.querySelector('.yearsavings-value'),

    valYear = document.querySelector('.year-value'),
    valMonth = document.querySelector('.month-value'),
    valDay = document.querySelector('.day-value'),

    inpExp = document.querySelectorAll('.expenses-item'),
    inpOptExp = document.querySelectorAll('.optionalexpenses-item');
    inpChooseIncome = document.querySelector('.choose-income');

    btnExp = document.querySelector('.expenses-item-btn'),
    btnOptExp = document.querySelector('.optionalexpenses-btn'),
    btnCountBudget = document.querySelector('.count-budget-btn'),

    inpInc = document.querySelectorAll('#income'),
    inpSav = document.querySelector('#savings'),
    inpSum = document.querySelector('#sum'),
    inpPercent = document.querySelector('#percent');
    // inpYear = document.querySelector('.year-value'),
    // inpMonth = document.querySelector('.moth-value'),
    // inpDay = document.querySelector('.day-value');

    btns = document.querySelectorAll('button');
    btns.forEach((i) => {
        if(!i.classList.contains('start')) {
            i.disabled = true;
        }
    });

btnStart.addEventListener('click', function(){
    let money, time;

    time = prompt("Введите дату в формате YYYY-MM-DD?", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    appData.timeDate = time;
    appData.budget = money;

    valBudget.textContent = money.toFixed();
    valYear.value = new Date(Date.parse(time)).getFullYear();
    valMonth.value = new Date(Date.parse(time)).getMonth() + 1;
    valDay.value = new Date(Date.parse(time)).getDate();

    btns.forEach((i) => {
        if(!i.classList.contains('start')) {
            i.removeAttribute('disabled', 'disabled');
        }
    });
});

btnExp.addEventListener('click', function(){
    appData.sumExpenses = 0;
    
    for (let i = 0; i < inpExp.length; i++) {
 
        let expensesName = inpExp[i].value;
        let expensesSum = inpExp[++i].value;

        if (typeof (expensesName) === "string" && typeof (expensesName) != null && expensesName.length < 50 && expensesName != "" &&
            expensesSum != "" && typeof (expensesSum) != null) {
            console.log("done");
            appData.expenses[expensesName] = expensesSum;
            appData.sumExpenses += +expensesSum;
        } else {
            i = i - 1;
        }
    }
    
    valExp.textContent = appData.sumExpenses;
});

btnOptExp.addEventListener('click', function(){
        for(let i = 0; i < inpOptExp.length; i++){
            let optExpenses = inpOptExp[i].value;
            appData.optionalExpenses[i] = optExpenses;
            valOptExp.textContent += appData.optionalExpenses[i] + ' ';
        }
});

btnCountBudget.addEventListener('click', function(){
    appData.moneyDay = ((appData.budget - appData.sumExpenses) / 30).toFixed(2);
    valDayBudget.textContent = appData.moneyDay;

    if (appData.moneyDay < 500) {
        valLevel.textContent = "Бюджет очень мал";
    } else if (appData.moneyDay >= 500 && appData.moneyDay < 2000) {
        valLevel.textContent = "Средний бюджет";
    } else if (appData.moneyDay >= 2000) {
        valLevel.textContent = "Хороший бюджет";
    } else {
        valLevel.textContent = "Произошла ошибка";
    }
});

inpChooseIncome.addEventListener('input', function(){
    let items = inpChooseIncome.value;
    appData.income = items.split(', ');
    valInc.textContent = appData.income;
});

inpSav.addEventListener('click', function(){
    if (appData.savings == false) {
        appData.savings = true;
    } else {
        appData.savings = false;
    }
});

function SumPercent() {
    if (appData.savings == true) {
        let sum = +inpSum.value,
            percent = +inpPercent.value;

        appData.monthIncome = (sum / 100 / 12 * percent).toFixed(2);
        appData.yearIncome = (sum / 100 * percent).toFixed(2);

        valMothSav.textContent = appData.monthIncome;
        valYearSav.textContent = appData.yearIncome;
    }
}

inpSum.addEventListener('input', SumPercent);

inpPercent.addEventListener('input', SumPercent);

let appData = {
    budget: 0,
    timeDate: 'time',
    expenses: {},
    sumExpenses: 0,
    optionalExpenses: {},
    income: [],
    savings: false,
};

console.log("Наша программа включает в себя данные: ");
for (item in appData) {
    console.log(item);
}
    
