function playReverseText() {
  const userText = prompt("Введите текст, который нужно перевернуть:");

  if (userText === null) {
    alert("Игра прервана.");
    return;
  }

  if (userText.trim() === "") {
    alert("Вы ничего не ввели!");
    return;
  }

  const reversed = userText.split("").reverse().join("");
  alert(`Перевернутый текст:\n${reversed}`);
}

playReverseText();