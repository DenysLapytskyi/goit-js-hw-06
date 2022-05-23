const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", inputHandleRange);

function inputHandleRange(event) {
    text.style.fontSize = `${event.target.value}px`;
}