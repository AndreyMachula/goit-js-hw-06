// 1. Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// 2. Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// 3. Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = Number(document.querySelector('#value').textContent);
// console.log(counterValue);

const valueEl = document.querySelector('#value');
const dekrementBtn = document.querySelector('#counter').firstElementChild;
const inkrementBtn = document.querySelector('#counter').lastElementChild;
// console.log(valueEl);
// console.log(dekrementBtn);
// console.log(inkrementBtn); 

dekrementBtn.addEventListener('click', () => {
  console.log('Добавляю слушателя события на целевую кнопку: -1')

  counterValue -= 1;
  // console.log(counterValue);

  valueEl.innerText = counterValue;
  // console.log("counterValue", counterValue);
});

inkrementBtn.addEventListener('click', () => {
  console.log('Добавляю слушателя события на целевую кнопку: +1')

  counterValue += 1;
  // console.log(counterValue);

  valueEl.innerText = counterValue;
  // console.log("counterValue", counterValue);
});

