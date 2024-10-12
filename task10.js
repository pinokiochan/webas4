let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");

let operation = prompt("Enter an operation: +, -, *, /").toLowerCase();

function calculate(num1, num2, operation){
    switch(operation){
        case '+' :
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Error"
    }
}

let result = calculate(num1, num2, operation);


document.write(`Number 1: ${num1} <br>`);
document.write(`Number 2: ${num2} <br>`);
document.write(`Operation: ${operation} <br>`);
document.write(`Result: ${result} <br>`);


console.log("Number 1: " + num1);
console.log("Number 2: " + num2);
console.log("Operation: " + operation);
console.log("Result: " + result);