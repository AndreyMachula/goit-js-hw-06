const inputId = document.querySelector("#font-size-control");
const spanTextId = document.querySelector("#text");

inputId.addEventListener("input", onControlRange);

function onControlRange() {
  spanTextId.style.fontSize = inputId.value + "px";
}
onControlRange()