

const input = document.querySelector("#controls input");
console.log(input);
console.log(input.value);

const createboxBtn = document.querySelector('[data-create]');
console.log(createboxBtn);

const deleteboxBtn = document.querySelector('[data-destroy]');
console.log(deleteboxBtn);

const boxes = document.querySelector("#boxes");
console.log(boxes);


const inputChange = (number) => {
  input.setAttribute("count", Number(number.currentTarget.value));
  console.log(Number(number.currentTarget.value));
};
input.addEventListener("input", inputChange);

const createBoxes = () => {
  let baseBoxSize = 30;
  let countBox = Number(input.getAttribute("count"));
  console.log(countBox);
  for (let i = 0; i < countBox; i++) {
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = baseBoxSize + "px";
    newBox.style.width = baseBoxSize + "px";
    newBox.style.margin = "10px";
    baseBoxSize += 10;
    newBox.classList.add("new-box");
    boxes.append(newBox);
  }
};
createboxBtn.addEventListener("click", createBoxes);




const deleteBox = () => {
  const allNewBoxes = document.querySelectorAll(".new-box");
  // console.log(allNewBoxes);
  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }
  
};

deleteboxBtn.addEventListener("click", deleteBox);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}