/*Напиши скрипт который, при наборе текста в инпуте
 input#name-input (событие input), подставляет его текущее
  значение в span#name-output. Если инпут пустой,
   в спане должна отображаться строка 'незнакомец'.*/
const nameInputRef = document.querySelector(" input#name-input  ");
console.log(nameInputRef);
const nameOutputRef = document.querySelector("#name-output");
console.log(nameOutputRef);

nameInputRef.addEventListener("change", changeInputName);
function changeInputName() {
  return (nameOutputRef.textContent = nameInputRef.value);
}
