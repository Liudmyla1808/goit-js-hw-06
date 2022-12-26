const inputEl = document.querySelector('input');
console.log(inputEl);
const spanEl = document.getElementById("text");
console.log(spanEl);

inputEl.addEventListener("input", onInputChange);
function onInputChange (event){
    spanEl.style.fontSize = event.currentTarget.value + "px";
}