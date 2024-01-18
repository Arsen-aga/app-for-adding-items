// Кнопка для перехода к заполнению данных объекта
const addBtn = document.getElementById("add-btn");
// Кнопка для создания нового объекта и вывода его на экран
const createBtn = document.getElementById("create-btn");
// Обертка для addBtn
const addElementBlock = document.querySelector(".add-element");
// Блок с инпутами - блок для заполнения
const createElementBlock = document.querySelector(".create-element");
// Блок для вывода всех объектов
const listElement = document.querySelector(".main__inner");
// body
const body = document.querySelector("body");

//---------------ПОПАП--------------
// Кнопка для закрытия попапа
const closePopup = document.querySelector(".popup-close-btn");
// Блок попап
const popup = document.querySelector(".popup");
// Обертка данных в попапе
const infoPopup = document.querySelector(".popup__wrapper-info");
// Задний фон попапа
const bgPopup = document.querySelector(".popup-bg");

//---------------ИНПУТЫ--------------------

// Изображение
const numImgElem = document.getElementById("num-img");
// Заглавие
const titleElem = document.getElementById("title");
// Размер
const sizeElem = document.getElementById("size");
// Год
const yearElem = document.getElementById("year");
// Уровень
const levelElem = document.getElementById("lvl");
// Старая цена
const priceOldElem = document.getElementById("price-old");
// Новая цена
const priceNewElem = document.getElementById("price-new");
// Описание
const descrElem = document.getElementById("descr");

// Объект со всеми инпутами
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

// Массив готовыч данныч объектов для вывода на страницу
const elementsList = [
  // Первый объект
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
  // Второй объект
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

// Функция рендер сразу выводит на экран все элементы массива
function render() {
  // Очистка блока-обертки всех элементов
  listElement.innerHTML = "";
  // Итеррация массива по всем объектам
  for (let i = 0; i < elementsList.length; i++) {
    // Добавление объекта после последнего объекта
    listElement.insertAdjacentHTML(
      // после последнего елемента внутри данного блока (перед закрытием тега)
      "beforeend",
      // Вызов функции с уже готовым HTML кодом, в который попадают данные объектов
      getNoteTemplate(elementsList[i], i) // объект, индекс объекта в массиве
    );
  }
}

// Вызов рендера, чтобы показать начальные объекты
render();

// Закрытие начального блока на странице и переход к блоку с инпутами
addBtn.onclick = () => {
  // Скрыть начальный блок
  addElementBlock.classList.remove("active");
  // Показать блок с инпутами
  createElementBlock.classList.add("active");
};
// Создание объекта по клику кнопки, после заполнения инпутов и переход к начальному блоку
createBtn.onclick = () => {
  // Показать начальный блок
  addElementBlock.classList.add("active");
  // Скрыть блок с инпутами
  createElementBlock.classList.remove("active");

  // Создание объекта и добавление его в общий массив
  createElementFromList(inpArrValue); // (Массив инпутов)
  // Вызов рендера, чтобы показать все объекты
  render();
  // console.log(elementsList);
};

// Функция для создания нового объекта и для добавления его в общий массив объектов
function createElementFromList(arr) {
  // (Массив инпутов)
  // Проверка инпутов на наличие данных
  const checkInputs = arr.every((e) => {
    // Если хотя бы у одного инпута будут данные, то создается объект
    return e.value.length == 0; // Проверка длины значения инпута
  });
  // Если у всех инпутов нет значения, то просто ничего не выводим
  if (checkInputs) {
    return;
    // Если есть значение хотя бы у одного, то создаем объект и добавляем в массив
  } else {
    // Добавляем объект в массив последним элементом
    elementsList.push({
      // Добавление значений объекта
      // Перед добавлением данных, вызывается функция по проверке инпутов на наличие значения
      img: checkInnerInput(numImgElem.value, 1), // Если у инпута нет значения, то добавляется значение по умолчанию
      title: checkInnerInput(titleElem.value, "Название"), // (инпут, значнеие по умолчанию) // если не ввести свое значение по умолчанию, то автоматически значением будет 1
      size: checkInnerInput(sizeElem.value, "150*150"),
      year: checkInnerInput(yearElem.value, 2000),
      level: checkInnerInput(levelElem.value, 81),
      priceOld: checkInnerInput(priceOldElem.value, 10_000),
      priceNew: checkInnerInput(priceNewElem.value, 40_000),
      description: checkInnerInput(descrElem.value, "Desription"),
    });
  }
  // Очистка всех инпутов
  arr.forEach((e) => (e.value = ""));
}

// Функция с готовым HTML кодом, которая принимает данные объекта
function getNoteTemplate(e, i) {
  return `
          <div class="object">
          <div class="top-block" data-index="${i}"></div>
          <div class="object__wrapper-img">
            <img class="object__img" src="img/${e.img}.jpg" alt="item img">
          </div>
          <div class="object__inner">
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

// Функция по проверке инпута на значение, если нет значения, то по умолчанию будет 1
function checkInnerInput(elemValue, newValue = 1) {
  return elemValue.length === 0 ? newValue : elemValue;
}

// popup scripts

// слушаем дата фтрибут при клике на контейнер объектов
// еслит нажимаем на объект, то открывается попап с данными объекта
listElement.onclick = (event) => {
  // клик по списку (слушатель)
  const objectIndex = event.target.dataset.index; // достаем индекс объекта при помощи слушателя
  if (objectIndex) {
    // если индекс есть
    // то открываем попап с данными объекта
    openPopup(objectIndex); // передаем индекс дата атрибута
    popupStatus("add"); // включаем попап
  }
};

// проверям появилась ли на странице кнопка выхода с попапа(крестик)
if (closePopup) {
  // при клике на кнопку попап закрываем
  closePopup.onclick = () => popupStatus("remove");
  // при клике за пределы попапа - закрываем попап
  bgPopup.onclick = () => popupStatus("remove");
}

// функция для открытия и закрытия попапа
function popupStatus(status) {
  // если remove, то закрываем попап
  if (status === "remove") {
    popup.classList.remove("active");
    body.classList.remove("noscroll");
  }
  // если add, то открываем попап
  if (status === "add") {
    popup.classList.add("active");
    body.classList.add("noscroll");
  }
}

// функция открытия попапа конкретного объекта
function openPopup(index) { // передаем индекс объекта
  infoPopup.innerHTML = getPopupTemplate(elementsList[index], index);
}

// Функция с готовым HTML кодом, которая принимает данные объекта
function getPopupTemplate(e, i) {
  return `
        <div class="popup__info">
        <div class="popup__info-top" data-index="${i}"></div>
          <h4 class="popup__title">
            ${e.title}
          </h4>
          <p class="popup__descr">
            ${e.description}
          </p>
          <div class="popup__wrapper-img">
            <img class="popup__img" src="img/${e.img}.jpg" alt="item img">
          </div>
        </div>
  `;
}
