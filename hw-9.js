// Задание 1
const heading1 = document.querySelector('#heading-task1');
const button1 = document.querySelector('#btn-task1');

button1.addEventListener('click', () => {
  if (heading1.style.display === 'none') {
    heading1.style.display = 'block';
  } else {
    heading1.style.display = 'none';
  }
});


// Задание 2 
const text2 = document.querySelector('#text-task2');
const button2 = document.querySelector('#btn-task2');

button2.addEventListener('click', () => {
  text2.style.color = 'blue';
});


// Задание 3 
const heading3 = document.querySelector('#heading-task3');
const button3 = document.querySelector('#btn-task3');

button3.addEventListener('click', () => {
  heading3.textContent = 'Привет, мир!';
});


// Задание 4 
const descriptionsTask4 = document.querySelectorAll('.description');

descriptionsTask4.forEach((element) => {
  element.textContent = 'Измененный текст';
});


// Задание 5 
const descriptionsTask5 = document.querySelectorAll('.description-task5');

descriptionsTask5.forEach((element) => {
  element.textContent = 'Новый текст';
});


// Задание 6 
const button6 = document.querySelector('#btn-task6');

button6.addEventListener('click', () => {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'Новый абзац';
  document.body.appendChild(newParagraph);
});


//Задание 7 
const button7 = document.querySelector('#btn-task7');

button7.addEventListener('click', () => {
  const firstDescription = document.querySelector('.description');
  if (firstDescription) {
    firstDescription.remove();
  }
});