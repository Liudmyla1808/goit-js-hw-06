function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector('.change-color');
console.log(buttonEl);
const textEl = document.querySelector('.color');
console.log(textEl);
const bodyEl = document.querySelector('body');
console.log(bodyEl);

buttonEl.addEventListener("click", onChangeColor);

function onChangeColor( event){
 event.preventDefault();
 bodyEl.style.backgroundColor = getRandomHexColor();
}