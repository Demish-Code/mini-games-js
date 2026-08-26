function playGuessNumber() {
  const targetNumber = Math.floor(Math.random() * 100) + 1;
  alert("Я загадал число от 1 до 100. Попробуй угадать!");

  while (true) {
    const input = prompt("Введите число (или нажмите 'Отмена' для выхода):");

    if (input === null) {
      alert("Игра прервана.");
      break;
    }

    const guess = Number(input.trim());

    if (input.trim() === "" || isNaN(guess)) {
      alert("Пожалуйста, введите корректное число!");
      continue;
    }

    if (guess === targetNumber) {
      alert(`Поздравляю! Ты угадал число ${targetNumber}!`);
      break;
    } else if (guess < targetNumber) {
      alert("Загаданное число БОЛЬШЕ!");
    } else {
      alert("Загаданное число МЕНЬШЕ!");
    }
  }
}

playGuessNumber();