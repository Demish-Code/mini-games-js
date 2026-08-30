function playRockPaperScissors() {
  const options = ["камень", "ножницы", "бумага"];
  
  const userInput = prompt("Введите ваш выбор: камень, ножницы или бумага");

  // 1. Проверка на клик по кнопке "Отмена"
  if (userInput === null) {
    alert("Игра прервана.");
    return;
  }

  const cleanedInput = userInput.trim().toLowerCase();

  // 2. Проверка на корректность ввода
  if (!options.includes(cleanedInput)) {
    alert("Некорректный выбор! Пожалуйста, введите: 'камень', 'ножницы' или 'бумага'.");
    return;
  }

  // 3. Выбор компьютера
  const randomIndex = Math.floor(Math.random() * options.length);
  const computerChoice = options[randomIndex];

  // 4. Определение результата
  let result = "";

  if (cleanedInput === computerChoice) {
    result = "Ничья!";
  } else if (
    (cleanedInput === "камень" && computerChoice === "ножницы") ||
    (cleanedInput === "ножницы" && computerChoice === "бумага") ||
    (cleanedInput === "бумага" && computerChoice === "камень")
  ) {
    result = "Победа! Вы выиграли!";
  } else {
    result = "Поражение! Компьютер выиграл.";
  }

  // 5. Вывод итогов
  alert(`Ваш выбор: ${cleanedInput}\nВыбор компьютера: ${computerChoice}\n\nРезультат: ${result}`);
}