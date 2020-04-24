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
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let expensesName = prompt("Введите обязательную статью расходов в этом месяце", "");
            let expensesSum = prompt("Во сколько обойдется?", "");
    
            if (typeof (expensesName) === "string" && typeof (expensesName) != null && expensesName.length < 50 && expensesName != "" &&
                expensesSum != "" && typeof (expensesSum) != null) {
                console.log("done");
                appData.expenses[expensesName] = expensesSum;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyDay = (money / 30).toFixed(2);
        alert('Бюджет на 1 день = ' + appData.moneyDay);
    },
    detectLevel: function() {
        if (appData.moneyDay < 100) {
            console.log("Бюджет очень мал");
        } else if (appData.moneyDay >= 100 && appData.moneyDay < 2000) {
            console.log("Средний бюджет");
        } else if (appData.moneyDay >= 2000) {
            console.log("Хороший бюджет");
        } else {
            console.log("Произошла ошибка");
        }
    },
    chooseOptExpenses: function() {
        let optExpenses;

        for(let i = 0; i < 3; i++){
            optExpenses = prompt("Статья НЕобязательных расходов в этом месяце");
            
            if(optExpenses == null || optExpenses == "") {
                i = i - 1;
            } else {
                appData.optionalExpenses[i+1] = optExpenses;
            }
        }
    },
    checkSavings:function() {
        if (appData.savings == true) {
            let save = +prompt("Какая сумма накоплений?");
            let percent = +prompt("Под какой процент?");
    
            appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
            alert("Ежемесячный доход с депозита: " + appData.monthIncome);
        }
    },
    // chooseIncome: function() {
    //     let item;
    //     do {
    //         item = prompt("Что принесет дополнительный доход? (перечисл. через запятую)", "");         
    //     } while (item == null || item == "");
    //     appData.income = item.split(", ");

    //     do {
    //         item = prompt("Может что-то еще?", "");
    //     } while (item == null || item == "");
    //     appData.income.push(item);
    //     appData.income.sort();
    // },
    chooseIncome: function() {
        let item;
        do {
            item = prompt("Что принесет дополнительный доход? (перечисл. через запятую)", "");
            if (item == null || item == "") {
                appData.income = false;
            } else {
                appData.income = item.split(", ");
                for (i of appData.income) {
                    if (i == null || i == "") {
                        console.log('enter error');
                        appData.income = false;
                    }
                }
            }
        } while (appData.income == false);
        
        do {
            item = prompt("Может что-то еще?", "");
        } while (item == null || item == "");
        appData.income.push(item);
        appData.income.sort();

        appData.income.forEach(function(val, i) {
            console.log(i+1 + ": " + val);
        });
    },
};

console.log("Наша программа включает в себя данные: ");
for (item in appData) {
    console.log(item);
}