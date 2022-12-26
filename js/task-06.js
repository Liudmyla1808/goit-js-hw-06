const inputEl = document.querySelector('input');
console.log(inputEl);

inputEl.addEventListener("blur", onInputBlur);
function onInputBlur (event) {
 if (event.currentTarget.value.length === +inputEl.dataset.length)

 {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    
 }
 else  {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
 }
}