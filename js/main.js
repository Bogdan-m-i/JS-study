let money = prompt("Ваш бюджет на месяц?", "");
//let time = prompt("Введите дату в формате YYYY-MM-DD?", "");

let appData = {
    money: money,
    timeDate: 'time',
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let expenses = prompt("Введите обязательную статью расходов в этом месяце", "");
let expensesSum = prompt("Во сколько обойдется?", "");
appData.expenses[expenses] = expensesSum;

expenses = prompt("Введите обязательную статью расходов в этом месяце", "");
expensesSum = prompt("Во сколько обойдется?", "");
appData.expenses[expenses] = expensesSum;

console.log(appData.expenses);

alert( 'Бюджет на 1 день = ' + Math.round(money/30) );