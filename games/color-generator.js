function playRandomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  // Принудительно меняем фон у всех возможных элементов
  document.documentElement.style.backgroundColor = color;
  document.body.style.backgroundColor = color;
  document.querySelector('main').style.backgroundColor = color;
  
  // Меняем фон у mini-games, меняем и её фон
  const miniGames = document.querySelector('.mini-games');
  if (miniGames) {
    miniGames.style.backgroundColor = color;
  }

  // Обновляем отображение цвета
  const display = document.getElementById('colorDisplay');
  if (display) {
    display.textContent = 'Цвет: ' + color;
  }
}