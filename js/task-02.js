const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navItemPEl = document.createElement("li");
navItemPEl.classList.add('item');
navItemPEl.textContent = "Potatoes";

const navItemMEl = document.createElement("li");
navItemMEl.classList.add('item');
navItemMEl.textContent = "Mushrooms";

const navItemGEl = document.createElement("li");
navItemGEl.classList.add('item');
navItemGEl.textContent = "Garlic";

const navItemTEl = document.createElement("li");
navItemTEl.classList.add('item');
navItemTEl.textContent = "Tomatos";

const navItemHEl = document.createElement("li");
navItemHEl.classList.add('item');
navItemHEl.textContent = "Herbs";

const navItemCEl= document.createElement("li");
navItemCEl.classList.add('item');
navItemCEl.textContent = "Condiments";

const listEl = document.getElementById("ingredients");
listEl.append(navItemPEl,navItemMEl, navItemGEl, navItemTEl, navItemHEl, navItemCEl )
