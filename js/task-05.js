/*Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна 
отображаться строка "Anonymous".
*/

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
// console.log(textInput);
// console.log(output);

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === '') {
    output.textContent = 'Ananymus'
  } else {
    output.textContent = event.currentTarget.value
  };
  
});
console.log(output.textContent);
