/*Напиши скрипт, который реагирует на изменение значения 
input#font - size - control(событие input) и изменяет инлайн - стиль span#text
обновляя свойство font - size.В результате при
 перетаскивании ползунка будет меняться размер текста.*/
const fontSizeControlRef = document.querySelector("#font-size-control");
const textNameRef = document.querySelector("#text");
fontSizeControlRef.min = 10;

fontSizeControlRef.addEventListener("input", onChangeFonts);
function onChangeFonts(event) {
  textNameRef.style.fontSize = event.currentTarget.value + "px";
}
