// console.log("Math.random", Math.round(Math.random() * 3));

const max = 100;
const rannumber = Math.round(Math.random() * max);
const number = document.querySelector("h1");
const button = document.querySelector("button");

randomnumberfunc();

function randomnumberfunc() {
  number.textContent = rannumber;
}
