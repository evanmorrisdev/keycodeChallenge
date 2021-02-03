const headerResult = document.getElementById("ask");
const eventKeyResult = document.getElementById("keyResult");
const keycodeResult = document.getElementById("codeResult");
const whichEventResult = document.getElementById("whichResult");

document.addEventListener("keydown", (event) => {
    headerResult.textContent = event.which;
    keycodeResult.textContent = event.code;
    whichEventResult.textContent = event.which;
    eventKeyResult.textContent = event.key;
})