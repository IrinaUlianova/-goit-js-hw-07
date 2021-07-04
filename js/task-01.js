const text = document.querySelector("h2");
console.log("Категория:", text.textContent);
const elem = document.querySelector(".item");

elem.classList.forEach((cls) => {
  console.log("Количество елементов:", cls.length);
});
