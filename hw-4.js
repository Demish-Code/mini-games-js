// Задание №1
let i = 1;
while (i <= 2) {
  console.log("Привет");
  i++;
}

// Задание №2
for (let i = 1; i <= 5; i++) { console.log(i); }

// Задание №3
for (let i = 7; i <= 22; i++) { console.log(i); }

// Задание №4
const obj = {
  "Коля": '200',
  "Вася": '300',
  "Петя": '400'
};

for (let key in obj) {
   console.log(`${key} — зарплата ${obj[key]} долларов`);
}

// Задание №5
let n = 1000;
let num = 0; 

while (n >= 50) {
  n /= 2;
  num++;
}
console.log(`Результат: ${n}, количество итераций: ${num}`);

// Задание №6
let firstFriday = 7;

for (let day = 1; day <= 31; day++) {
  if (day >= firstFriday && (day - firstFriday) % 7 === 0) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
  }
}

// Доп задание №7
let k = 100;
let iterations = 0;

while (k >= 0) {
  k -= 7;
  iterations++;
}
console.log(`Результат: ${k}, количество итераций: ${iterations}`);

// Доп задание №8
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

for (let i = 0; i < months.length; i++) {
  console.log(`${i + 1} — ${months[i]}`);
}

// Доп задание №9
// Создайте объект, описывающий книгу, с такими свойствами как "название", "автор", "год издания", "жанр". Напишите код, который выводит все свойства этого объекта в консоль.

const book = {
  title: 'Гордые души',
  author: 'Ана Рома',
  year: 2026,
  genre: 'Dark romance'
};

for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}

// Доп задание №10
// 1. Создаём массив
// Math.random() - случайное дробное от 0 до 1
// * 100 - растягиваем до 0..100
// Math.floor() - округляем вниз до целого
// .push() - добавляем элемент в конец массива
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100));   
}
console.log(numbers);

// 2. Ищем минимум
let min = numbers[0];                           // Самое маленькое число (пока что)

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {                       // если нашли число еще меньше
    min = numbers[i];                           // обновляем
  }
}

console.log(`Минимальное число: ${min}`);