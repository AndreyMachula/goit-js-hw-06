const inputId = document.querySelector("#font-size-control");
const spanTextId = document.querySelector("#text");

inputId.addEventListener("input", onControlRange);

function onControlRange(event) {
  spanTextId.style.fontSize = event.currentTarget.value + "px";
}