const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.getElementById("ingredients");

const list = ingredients.map((item) => {
  let itemList = document.createElement("li");
  itemList.textContent = item;
return itemList;
});
listEl.append(...list);

