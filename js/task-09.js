function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector('.change-color');

const textEl = document.querySelector('.color');
console.log(textEl);
const bodyEl = document.querySelector('body');


buttonEl.addEventListener("click", onChangeColor);

function onChangeColor( event){
 event.preventDefault();
 const color = getRandomHexColor()
 bodyEl.style.backgroundColor = color;
 textEl.style.color = color;
}