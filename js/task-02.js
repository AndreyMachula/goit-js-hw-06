const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/*Напиши скрипт, который для каждого элемента массива ingredients:
 • Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
 • Добавит название ингредиента как его текстовое содержимое.
 • Добавит элементу класс item.
 • После чего вставит все <li> за одну операцию в список ul.ingredients.*/

const ingredientId = document.querySelector('#ingredients');

const ingredientEl = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  
  return itemEl;
});

// console.log(ingredientEl);

ingredientId.append(...ingredientEl);

console.log(ingredientId);

//============================================================

// const ingredientId = document.querySelector('#ingredients');

// const elements = [];

// ingredients.forEach((ingredient) => {
//   // console.log(ingredient);

//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;
//   itemEl.classList.add('item');

//   elements.push(itemEl);
// });

// // console.log(elements);

// ingredientId.append(...elements);
// console.log(ingredientId);






