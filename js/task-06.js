/*Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.*/
/*Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.*/
const validationInputRef = document.querySelector("#validation-input");
console.log(validationInputRef);
const validInputLengthRef = document.querySelector("input#validation-input")
  .dataset.length;
console.log(validInputLengthRef);

validationInputRef.addEventListener("blur", onValidInput);
function onValidInput(event) {
  const lengthValue = event.currentTarget.value.length;

  if (lengthValue == validInputLengthRef) {
    validationInputRef.classList.add("valid");
    validationInputRef.classList.remove("invalid");
  } else {
    validationInputRef.classList.add("invalid");
  }
}
