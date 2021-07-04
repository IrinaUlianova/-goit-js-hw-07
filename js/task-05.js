/*Напиши скрипт который, при наборе текста в инпуте
 input#name-input (событие input), подставляет его текущее
  значение в span#name-output. Если инпут пустой,
   в спане должна отображаться строка 'незнакомец'.*/
const nameInputRef = document.querySelector(" input#name-input  ");
console.log(nameInputRef);
const nameOutputRef = document.querySelector("#name-output");
console.log(nameOutputRef);

nameInputRef.addEventListener("input", changeInputName);
function changeInputName(event) {
  if (event.currentTarget.value) {
    nameOutputRef.textContent = event.currentTarget.value;
  } else {
    nameOutputRef.textContent = "незнакомец";
  }
}
