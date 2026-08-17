// Задание №1
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === 10) {
    break;
  }
}

// Задание №2
const arrr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrr.length; i++) {
  if (arrr[i] === 4) {
    console.log(i);
    break;
  }
}

// Задание №3
const words = [1, 3, 5, 10, 20];
console.log(words.join(' '));

// Задание №4
const result = []; // главный (внешний) массив

for (let i = 0; i < 3; i++) {           // внешний цикл — 3 раза
  const inner = [];                     // создаём пустой внутренний массив
  
  for (let j = 0; j < 3; j++) {         // внутренний цикл — 3 раза
    inner.push(1);                      // кладём единичку
  }
  
  result.push(inner);                   // кладём готовый inner в result
}

console.log(result);

// Задание №5
const add = [1, 1, 1];
add.push(2, 2, 2)
console.log(add)

// Задание №6
const sortirovka = [9, 8, 7, 'a', 6, 5];
sortirovka.sort();
const cleaned = sortirovka.filter(function(item) {
  return item !== 'a';
});

console.log(cleaned)

// Задание №7
const num = [9, 8, 7, 6, 5];

const userInput = Number(prompt('Угадай число:'));

if (num.includes(userInput)) {
  alert('Угадал');
} else {
  alert('Не угадал');
}

// Задание №8
const str = 'abcdef';

//строку → массив
const arrR = str.split('');
console.log(arrR);

//перевернуть массив
arrR.reverse();
console.log(arrR);

//массив → строка
const reversedStr = arrR.join('');
console.log(reversedStr);

// Задание №9
const addD = [[1, 2, 3], [4, 5, 6]];

const combined = [...addD[0], ...addD[1]];
console.log(combined);

// Задание №10
const rar =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < rar.length - 1; i++) {
console.log(rar[i] + rar[i + 1])
}

// Задание №11
function getSquares(arr) {
  return arr.map(function(n) {
    return n ** 2;
  });
}
console.log(getSquares([1, 2, 3, 4, 5]));

// Задание №12
function getLengths(ara) {
  return ara.map(function(n) {
    return n.length;
  });
}

console.log(getLengths(['a', 'Hello', 'JS']));


// Задание №13
function getNegatives(rara) {
  return rara.filter(function(n) {
    return n < 0;
  });
}
console.log(getNegatives([1, -2, 3, -4, 5]));

// Задание №14
const arra = [];

for (let i = 0; i < 10; i++) {
  arra.push(Math.floor(Math.random() * 11));
}

const evens = arra.filter(function(n) {
  return n % 2 === 0;
});

console.log(arra, evens);

// Задание №15
// 1) Массив из 6 случайных чисел (1-10)
const aar = [];
for (let i = 0; i < 6; i++) {
  aar.push(Math.floor(Math.random() * 10) + 1);
}
console.log(aar);

// 2) Сумма через reduce
const sum = aar.reduce(function(acc, n) {
  return acc + n;
}, 0);

// 3) Среднее число
const average = sum / aar.length;
console.log(average);
