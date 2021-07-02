// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.parentNode);
// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.previousSibling);
// console.log(document.body.previousElementSibling);
// console.log(document.body.nextSibling);
// console.log(document.body.nextElementSibling);

// const selectedById = document.querySelector("ul#categories");
// console.log(selectedById);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".item");
// console.log(menuItemsByClass);
const text = document.querySelector("h2");
console.log("Категория:", text.textContent);
const elem = document.querySelector(".item");

// console.log(elem.classList);
// console.log(elem.classList.contains("red"));
// elem.classList.remove("item");
// console.log(elem.classList);
// elem.classList.add("new-class");
// console.log(elem.classList);
// elem.classList.add("a", "b", "c");
// console.log(elem.classList);
// elem.classList.toggle("hidden"); // спрячется, добавился класс hidden
// console.log(elem.classList.toggle("hidden"));
elem.classList.forEach((cls) => {
  console.log("Количество елементов:", cls.length); // text, red, new-class
});
