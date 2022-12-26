const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listEl = document.querySelector(".gallery");

const newGallery = images.
map((image) => `<li> <img src="${image.url}" alt = "${image.alt}" width=400 height=300> </li>`)
  .join("");

console.log(newGallery);
listEl.insertAdjacentHTML("afterbegin", newGallery);


// const itemPEl = document.createElement("li");
// const imgCatEl = document.createElement("img");
// imgCatEl.url = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260';
// imgCatEl.alt = '"White and Black Long Fur Cat"';
// itemPEl.appendChild(imgCatEl);

// const itemMEl = document.createElement("li");
// const imgFishEl = document.createElement("img");
// imgCatEl.url = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260';
// imgCatEl.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
// itemMEl.appendChild(imgFishEl);

// const itemGEl = document.createElement("li");
// const imgRunningEl = document.createElement("img");
// imgCatEl.url = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260';
// imgCatEl.alt = 'Group of Horses Running';
// itemGEl.appendChild(imgRunningEl);

