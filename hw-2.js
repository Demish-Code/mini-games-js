// Задача 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задача 2
const iphoneYear = 2007;
alert(iphoneYear);

// Задача 3
const creatorJS = 'Брендан Эйх';
alert(`Создатель JavaScript - ${creatorJS}`);

// Задача 4
const num1 = 10;
const num2 = 2;
const sum = num1 + num2;
const difference = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
alert(`
    Сумма ${num1} и ${num2} будет ${sum}, 
    разность ${num1} и ${num2} будет ${difference}, 
    произведение ${num1} и ${num2} будет ${multiplication}, 
    частное ${num1} и ${num2} будет ${division}
    `);

// Задача 5
const result = 2 ** 5;
alert(result);

// Задача 6
const dividend = 9;
const divisor = 2;
alert(dividend % divisor);

// Задача 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задача 8
const age = prompt('Сколько вам лет?');
alert(age);

// Задача 9
const user = {
  name: 'Даня',
  age: 20,
  isAdmin: true
};

// Задача 10
const userName = prompt('Как вас зовут?');
alert(`Привет, ${userName}!`);

// Задача 11
const number = Number(prompt('Загадайте число'));
const doubling = number * 2;
alert(`Удваиваем: ${doubling}`);
const plusTen = doubling + 10;
alert(`Прибавляем 10: ${plusTen}`);
const divide = plusTen / 2;
alert(`Делим на 2: ${divide}`);
const lastResult = divide - number;
alert(`Ответ всегда будет: ${lastResult}`);