// Массив вопросов и правильных ответов
const quiz = [
    {
       question: "Какой цвет небо?",
       options: ["1. Красный", "2. Синий", "3. Зеленый"],
       correctAnswer: 2
    },
    {
       question: "Сколько дней в неделе?",
       options: ["1. Шесть", "2. Семь", "3. Восемь"],
       correctAnswer: 2
    },
    {
       question: "Сколько у человека пальцев на одной руке?",
       options: ["1. Четыре", "2. Пять", "3. Шесть"],
       correctAnswer: 2
    }
];

let score = 0;

for (let i = 0; i < quiz.length; i++) {
  const text = `${quiz[i].question}\n${quiz[i].options.join('\n')}`;    // Собираем текст вопросов
  const userAnswer = prompt(text);                                      // Спрашиваем у пользователя 
  if (Number(userAnswer) === quiz[i].correctAnswer) {                   // Сравниваем с правильным
  score++;                                                              // Если правильно то + к счету
}
}

alert(`Правильных ответов: ${score} из ${quiz.length}`);