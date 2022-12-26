const inputEl = document.querySelector('input');
const spanEl = document.querySelector('span');
console.log(inputEl);
console.log(spanEl);


const onInputChange = (event) => inputEl.value != ' ' ? spanEl.textContent = inputEl.value : spanEl.textContent= 'Anonymous';

inputEl.addEventListener("input", onInputChange);

