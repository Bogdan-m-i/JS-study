let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeDate: 'time',
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let expensesName = prompt("Введите обязательную статью расходов в этом месяце", "");
        let expensesSum = prompt("Во сколько обойдется?", "");

        if (typeof (expensesName) === 'string' && typeof (expensesName) != null && expensesName.length < 50 && expensesName != "" &&
            expensesSum != "" && typeof (expensesSum) != null) {
            console.log("done");
            appData.expenses[expensesName] = expensesSum;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyDay = (money / 30).toFixed(2);
    alert('Бюджет на 1 день = ' + appData.moneyDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyDay < 100) {
        console.log("Бюджет очень мал");
    } else if (appData.moneyDay >= 100 && appData.moneyDay < 2000) {
        console.log("Средний бюджет");
    } else if (appData.moneyDay >= 2000) {
        console.log("Хороший бюджет");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function chooseOptExpenses() {
    let optExpenses;

    for(let i = 0; i < 3; i++){
        optExpenses = prompt("Статья НЕобязательных расходов в этом месяце");
        
        if(optExpenses == null || optExpenses == "") {
            i = i - 1;
        } else {
            appData.optionalExpenses[i+1] = optExpenses;
        }
    }
}
chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какая сумма накоплений?");
        let percent = +prompt("Под какой процент?");

        appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
        alert("Ежемесячный доход с депозита: " + appData.monthIncome);
    }
}
checkSavings();

console.log(appData);