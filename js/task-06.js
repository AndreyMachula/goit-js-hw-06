/*Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое 
на правильное количество введённых символов.
 • Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
 • Если введено подходящее количество символов, то border инпута становится зелёным, если 
неправильное - красным.
*/

const validation = document.querySelector("#validation-input");

const addRemovePassword = (remove, add) => {
  validation.classList.remove(`${remove}`);
  validation.classList.add(`${add}`);
};

const validPassword = (symbols) => {
  if (Number(validation.dataset.length) <= symbols.currentTarget.value.length) {
    addRemovePassword("invalid", "valid");
  } else {
    addRemovePassword("valid", "invalid");
  }
};

validation.addEventListener("blur", validPassword);