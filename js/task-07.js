/*Напиши скрипт, который реагирует на изменение значения 
input#font - size - control(событие input) и изменяет инлайн - стиль span#text
обновляя свойство font - size.В результате при
 перетаскивании ползунка будет меняться размер текста.*/
const fontSizeControlRef = document.querySelector("#font-size-control");
const textNameRef = document.querySelector("#text");
let fontSizeValue = fontSizeControlRef.value;
textNameRef.style.fontSize = `${fontSizeValue}px`;

fontSizeControlRef.addEventListener("input", onChangeFonts);

function onChangeFonts(event) {
  console.dir(event);
  let fontSizeValue = event.currentTarget.value;
  textNameRef.style.fontSize = `${fontSizeValue}px`;
  console.log(textNameRef.style.fontSize);
}
