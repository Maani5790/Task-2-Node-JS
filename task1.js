let readline = require("readline-sync");
var num1 = readline.question("Enter First Number?");
var num2 = readline.question("Enter Second Number?");
var operation = readline.question("Select Operation?");

  if (operation === "+") {
  console.log(`The Answer Of num1 & num2 Is ${num1 + num2}`);
}
  if (operation === "-") {
    console.log(`The Answer Of num1 & num2 Is ${num1 - num2}`);
}
  if (operation === "*") {
    console.log(`The Answer Of num1 & num2 Is ${num1 * num2}`);
}
  if (operation === "/") {
    console.log(`The Answer Of num1 & num2 Is ${num1 / num2}`);
} 
