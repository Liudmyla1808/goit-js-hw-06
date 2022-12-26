
const listEl = document.querySelectorAll(".item");
console.log('Number of categories:'+ listEl.length);

listEl.forEach((item) => {
   const text = item.firstElementChild.textContent;
   const element = item.lastElementChild.children.length; 
   console.log('Category:'+ text);
   console.log('Elements:'+ element);
});

