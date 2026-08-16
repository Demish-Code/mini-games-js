// Задание №1
function getMin(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(getMin(8, 4));
console.log(getMin(6, 6));

// Задание №2
function checkEven(n) {
  if (n % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}

console.log(checkEven(4));
console.log(checkEven(7));
console.log(checkEven(0));

// Задание №3
// Функция 1 — только выводит, не возвращает
function printSquare(n) {
  console.log(n * n);
}

// Функция 2 — возвращает, можно сохранить и использовать
function getSquare(n) {
  return n * n;
}

// Проверка
printSquare(5); // выведет 25 в консоль

const result = getSquare(5); // сохранили результат
console.log(result);         // 25
console.log(getSquare(3) + getSquare(4)); // 9 + 16 = 25

// Задание №4
function correctAge(age) {
  const n = Number(age);

  if (n < 0) {
    return 'Вы ввели неправильное значение';
  } else if (n <= 12) {
    return 'Привет, друг!';
  } else {
    return 'Добро пожаловать!';
  }
}

alert(correctAge(prompt('Сколько вам лет?')));

// Задание №5
function multiply(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return 'Одно или оба значения не являются числом';
  }

  return Number(a) * Number(b);
}

console.log(multiply(3, 4));
console.log(multiply('abc', 4));
console.log(multiply(2, 'hello'));
console.log(multiply('5', '6'));

// Задание №6
function getCube() {
  const input = prompt('Введите число:');
  const n = Number(input);

  if (isNaN(n)) {
    return 'Переданный параметр не является числом';
  }

  return `${n} в кубе равняется ${n * n * n}`;
}

console.log(getCube());

// Задание №7
const circle1 = {
  radius: 5,

  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },

  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 10,

  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },

  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter());