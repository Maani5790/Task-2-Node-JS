const ps = require("prompt-sync");
const prompt = ps();
const getOperator = () => {
    operator = prompt("select operation? ");

    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        
    } else {
        console.log("Enter valid operation.");
        getOperator();
    }
}

const getNum = (type) => {
    let someNum = prompt(`Please enter  ${type} number: `);
    if (!isNaN(someNum)) {
    
        return someNum;
    } else {
        console.log("enter a valid number.");
        return getNum(type);
    }
}

const calc = () => {
    if (operator === '+') {
        let add = num1 + num2;
        return add;
    } else if (operator === '-') {
        let substract = num1 - num2;
        return substract;
    } else if (operator === '*') {
        let multiply = num1 * num2;
        return multiply;
    } else if (operator = '/') {
        if (num2 === 0) {
            console.log("Cannot divide by zero.");
            getOperator();
        } else {
            let quotient = num1 / num2;
            return quotient
        }
    }
}
getOperator();
num1 = Number(getNum('first'));
num2 = Number(getNum('second'));
console.log(calc());