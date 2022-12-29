
const inputEL = document.querySelector('input');
const spanEl = document.querySelector('#name-output');

function onInputChange (event) {
    spanEl.textContent = event.currentTarget.value;
    if (!inputEL.value) { spanEl.textContent = "Anonymous";}
} 

inputEL.addEventListener("input", onInputChange);










