const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsArray = document.querySelector("ul#ingredients");
console.log(ingredientsArray);
const ingredientsArrayEl = (elements) => {
  const listItemEl = document.createElement(`li`);

  listItemEl.textContent = elements;
  return listItemEl;
};

const allListItemEl = ingredients.map((elements) =>
  ingredientsArrayEl(elements)
);
ingredientsArray.append(...allListItemEl);
