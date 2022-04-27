/*Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на 
button.change-color и выводит значение цвета в span.color.
*/

// const widgetEl = document.querySelector('.widget');
const colorEl = document.querySelector('.color')
const changeColorEl = document.querySelector('.change-color')

changeColorEl.addEventListener('click', onBackroundColor)

function onBackroundColor() {
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color;
  colorEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
