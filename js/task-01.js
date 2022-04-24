/*Напиши скрипт который: 
   • Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
   • Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
*/

const categoriesId = document.querySelector('#categories');
console.log('Number of categories:', categoriesId.children.length);

const categoriesItemEl = categoriesId.querySelectorAll('.item');
// console.log(categoriesItemEl);

categoriesItemEl.forEach((category) => {
  // console.log(category);
  console.log('Category:', category.firstElementChild.textContent, );
  console.log('Elements:', category.lastElementChild.children.length);
});











