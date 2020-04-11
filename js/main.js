let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD?", "");

let appData = {
    money: money,
    timeDate: 'time',
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

function expensesQuest() {
    let expensesName = prompt("Введите обязательную статью расходов в этом месяце", "");
    let expensesSum = prompt("Во сколько обойдется?", "");

    if ( typeof(expensesName) === 'string' &&  typeof(expensesName) != null && expensesName.length < 50 && expensesName != ""
        && expensesSum != "" && typeof(expensesSum) != null) {
            console.log("done");
            appData.expenses[expensesName] = expensesSum;
        } else {
            expensesQuest();
        }
}

for (let i = 0; i < 2; i++) {
    expensesQuest();
}
////////////////////////////////////
// let i = 0;
///////
// while (i < 2) {
//     expensesQuest();
//     i++;
// }
///////
// do {
//     expensesQuest();
//     i++;
// } while (i < 2);

console.log(appData.expenses);

appData.moneyDay = Math.round(money/30)

alert( 'Бюджет на 1 день = ' + appData.moneyDay);
if (appData.moneyDay < 100) {
    console.log("Бюджет очень мал");
} else if (appData.moneyDay >= 100 && appData.moneyDay < 2000) {
    console.log("Средний бюджет");
} else if (appData.moneyDay >= 2000) {
    console.log("Хороший бюджет");
} else {
    console.log("Произошла ошибка");
}
