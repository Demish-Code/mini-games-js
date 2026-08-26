function playArithmetic() {
  const operators = ['+', '-', '*', '/'];
  const op = operators[Math.floor(Math.random() * operators.length)];

  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;

  // Для деления делаем красивое целое число без дробей
  if (op === '/') {
    num1 = num1 * num2;
  }

  let correctAnswer;
  switch (op) {
    case '+': correctAnswer = num1 + num2; break;
    case '-': correctAnswer = num1 - num2; break;
    case '*': correctAnswer = num1 * num2; break;
    case '/': correctAnswer = num1 / num2; break;
  }

  const task = `${num1} ${op} ${num2}`;
  const userAnswer = prompt(`Решите задачу:\n${task}`);

  if (userAnswer === null) {
    alert("Игра прервана.");
    return;
  }

  if (userAnswer.trim() !== "" && Number(userAnswer.trim()) === correctAnswer) {
    alert("Верно! Вы ответили правильно.");
  } else {
    alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
  }
}

playArithmetic();