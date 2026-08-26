// Массив вопросов и правильных ответов
function playQuiz() {
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
  const text = `${quiz[i].question}\n${quiz[i].options.join('\n')}`;
  const userAnswer = prompt(text);

  // 1. Нажал "Отмена" (null) — прекращаем викторину
  if (userAnswer === null) {
    alert("Викторина прервана!");
    break;
  }

  const cleanedInput = userAnswer.trim();

  // 2. Ввёл пустую строку или не число — предупреждаем и повторно задаём этот же вопрос
  if (cleanedInput === "" || isNaN(Number(cleanedInput))) {
    alert("Некорректный ввод! Пожалуйста, введите номер ответа цифрой.");
    i--; // Уменьшаем i, чтобы на следующей итерации цикла снова задать текущий вопрос
    continue;
  }

  // 3. Проверяем правильность ответа
  if (Number(cleanedInput) === quiz[i].correctAnswer) {
    score++;
  }
}

alert(`Игра окончена! Правильных ответов: ${score} из ${quiz.length}`);
}