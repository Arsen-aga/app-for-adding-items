const addBtn = document.getElementById("add-btn");
const createBtn = document.getElementById("create-btn");
const addElementBlock = document.querySelector(".add-element");
const createElementBlock = document.querySelector(".create-element");
const listElement = document.querySelector(".main__inner");

const closePopup = document.getElementById("close-popup");
const popup = document.getElementById("popup");
const infoPopup = document.getElementById("popup-info");

const numImgElem = document.getElementById("num-img");
const titleElem = document.getElementById("title");
const sizeElem = document.getElementById("size");
const yearElem = document.getElementById("year");
const levelElem = document.getElementById("lvl");
const priceOldElem = document.getElementById("price-old");
const priceNewElem = document.getElementById("price-new");
const descrElem = document.getElementById("descr");

const inpArrValue = [
  numImgElem,
  titleElem,
  sizeElem,
  yearElem,
  levelElem,
  priceOldElem,
  priceNewElem,
  descrElem,
];

const elementsList = [
  {
    img: 1,
    title: "Фон 1",
    size: 250,
    year: 2002,
    level: 4,
    priceOld: 28000,
    priceNew: 45000,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui iusto earum cupiditate adipisci! Porro ex rerum odio reiciendis provident omnis et beatae cupiditate? Blanditiis corporis voluptatum perspiciatis labore. Labore?
Optio quaerat totam minus explicabo, quae non veniam voluptates aperiam ipsam expedita, quibusdam illo architecto ipsum omnis vero consequuntur quod adipisci impedit aspernatur? Quam eligendi cumque distinctio nesciunt suscipit tenetur.
Aperiam quibusdam inventore repellat voluptatum odit voluptas harum illum? Laudantium reiciendis quibusdam rerum ipsa, aspernatur at culpa sed asperiores nihil, nulla totam odit porro excepturi dolores eligendi. Amet, ea tenetur.`,
  },
  {
    img: 2,
    title: "Фон 2",
    size: 251,
    year: 2003,
    level: 5,
    priceOld: 29000,
    priceNew: 38000,
    description: `Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Текстов гор единственное предупреждал не, всемогущая послушавшись! Рот текст выйти повстречался коварный переулка инициал? Lorem правилами он до осталось текст.
Точках это вдали там они сбить букв реторический эта использовало, за ты, предупредила рыбного заманивший, моей знаках лучше напоивший. Там эта своих безорфографичный свое страна lorem злых выйти одна имеет!
Lorem своего силуэт необходимыми диких сбить большой толку семантика дорогу своих деревни алфавит, буквоград запятой семь заглавных рот послушавшись свое маленькая которое? Океана но осталось языкового проектах приставка запятой рекламных.`,
  },
];

function render() {
  listElement.innerHTML = "";
  for (let i = 0; i < elementsList.length; i++) {
    listElement.insertAdjacentHTML(
      "beforeend",
      getNoteTemplate(elementsList[i], i)
    );
  }
}

render();

addBtn.onclick = () => {
  addElementBlock.classList.remove("active");
  createElementBlock.classList.add("active");
};
createBtn.onclick = () => {
  addElementBlock.classList.add("active");
  createElementBlock.classList.remove("active");

  createElementFromList(inpArrValue);
  render();
  console.log(elementsList);
};

function createElementFromList(arr) {
  const checkInputs = arr.every((e) => {
    return e.value.length == 0;
  });
  if (checkInputs) {
    return;
  } else {
    elementsList.push({
      img: numImgElem.value,
      title: titleElem.value,
      size: sizeElem.value,
      year: yearElem.value,
      level: levelElem.value,
      priceOld: priceOldElem.value,
      priceNew: priceNewElem.value,
      description: descrElem.value,
    });
  }
  arr.forEach((e) => (e.value = ""));
}

listElement.onclick = (event) => {
  // console.log(event.target);
  console.log(event);
  // console.log(event.target.dataset.index);
};

function getNoteTemplate(e, i) {
  return `
          <div class="object">
          <div class="object__wrapper-img">
            <img class="object__img" src="img/${e.img}.jpg" alt="item img">
          </div>
          <div class="object__inner" data-index="${i}">
            <h3 class="object__title">
              ${e.title}
            </h3>
            <ul class="object__list">
              <li class="object__list-item">
                Размер: <span>${e.size}</span>
              </li>
              <li class="object__list-item">
                Год производства: <span>${e.year}</span>
              </li>
              <li class="object__list-item">
                Уровень из 10: <span>${e.level}</span>
              </li>
            </ul>
            <div class="object__price">
              <p class="object__price-new">${e.priceNew} <span>руб</span></p>
              <p class="object__price-old">${e.priceOld} <span>руб</span></p>
            </div>
          </div>
        </div>
  `;
}


closePopup.onclick = () => {
  popup.classList.remove('active');
}