const ps = require("prompt-sync");
const prompt = ps();

function add(a, b) {
  return a * b;
}

let num1 = parseInt(prompt("Enter First Number"));
let num2 = parseInt(prompt("Enter Second Number"));


console.log(add(num1, num2));









  

