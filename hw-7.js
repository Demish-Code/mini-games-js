// Задание 1
console.log('js'.toUpperCase());


// Задание 2
function filterByPrefix(array, searchString) {
  const lowerSearch = searchString.toLowerCase();
  return array.filter(item => item.toLowerCase().startsWith(lowerSearch));
}
console.log(filterByPrefix(['Кошка', 'котенок', 'Собака', 'КОТ'], 'кот'));


// Задание 3
const num = 32.58884;
console.log('До меньшего целого:', Math.floor(num));
console.log('До большего целого:', Math.ceil(num));
console.log('До ближайшего целого:', Math.round(num));


// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
console.log('Минимальное:', Math.min(...numbers));
console.log('Максимальное:', Math.max(...numbers));


// Задание 5
function printRandomOneToTen() {
  console.log(Math.floor(Math.random() * 10) + 1);
}
printRandomOneToTen();


// Задание 6
function getRandomArray(n) {
  const length = Math.floor(n / 2);
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (n + 1)));
  }
  return result;
}
console.log(getRandomArray(10));


// Задание 7
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInRange(5, 15));


// Задание 8
const currentDate = new Date();
console.log(currentDate);


// Задание 9
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 73);
console.log('Через 73 дня будет:', futureDate);


// Задание 10
function formatDate(date) {
  const months = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];
  const daysOfWeek = [
    "воскресенье", "понедельник", "вторник", "среда",
    "четверг", "пятница", "суббота"
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = daysOfWeek[date.getDay()];

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}
console.log(formatDate(new Date()));