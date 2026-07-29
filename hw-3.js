// Задание №1 
let password = "пароль";
let userPassword = prompt("Введите пароль");
if (userPassword === password) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неверно!");
}

// Задание №2 
let c = 8;  // 0, 10, -3, 2
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание №3
let d = 27;
let e = 38;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание №4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание №5
let monthNumber = 1;
if (monthNumber <= 13) {
    switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log("зима");
        break;
    case 3:
    case 4:
    case 5: 
        console.log("весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("лето");
        break;
    case 9:
    case 10:
    case 11:
        console.log("осень");
        break;
    default:
        console.log("Некорректный номер месяца");
        break;
    }
}

// Задание №6
let input = prompt("Введите любое число");
let num = Number(input);
if (isNaN(num)) {
    alert("Вы ввели не число");
} else if (num % 2 === 0) {
    alert("Число четное");
} else {
    alert("Число нечетное");
}

// Задание №7
{ // Область видимости, чтобы clientOS не конфликтовал с заданием 8
    let clientOS = 1;
    if (clientOS === 0) {
        console.log("Установите версию приложения для iOS по ссылке");
    } else {
        console.log("Установите версию приложения для Android по ссылке");
    }
}

// Задание №8
{ // Область видимости, чтобы clientOS не конфликтовал с заданием 7
    let clientOS = 1;
    let clientDeviceYear = 2010;
    let versionText = (clientDeviceYear < 2015) ? "облегченную версию" : "версию";
    let osText = (clientOS === 0) ? "iOS" : "Android";
    console.log(`Установите ${versionText} приложения для ${osText} по ссылке`);
}