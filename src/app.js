/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  // La tarea trata de plasmar una carta donde cada vez
  // refresques se cambie el número y el símbolo de esa carta
  //  Primero creo las variables uqe me den esos numeros y esos símbolos
  let numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let symbols = ["♦", "♥", "♠", "♣"];
  let symbolsColors = { "♠": "black", "♦": "red", "♥": "red", "♣": "black" };
  // Luego necesito que me extraiga números/símbolos rándom a partir de esas variables
  let randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];
  // Conecto con el html el resultado (textcontent) que es randomNumber/Symbols para que se muestre en el ID correspondiente del HTML
  document.getElementById("numberCenter").textContent = randomNumbers;
  document.getElementById("symbolSide").textContent = randomSymbols;
  document.getElementById("symbolSide2").textContent = randomSymbols;

  // Asociar el color del símbolo con el símbolo, desde la variable LET. Para ello necesito
  let color = symbolsColors[randomSymbols];
  document.getElementById("symbolSide").style.color = color;
  document.getElementById("symbolSide2").style.color = color;
};
