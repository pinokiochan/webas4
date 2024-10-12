let firstNumber = prompt("Enter first number: ");
let secondNumber = prompt("Enter second number: ");
console.log(`First Number: ${firstNumber}`);
console.log(`Second Number: ${secondNumber}`);

console.log(`First greater: ${Number(firstNumber) > Number(secondNumber)}`);
console.log(`Second greater: ${Number(firstNumber) < Number(secondNumber)}`);
console.log(`Both are equal: ${Number(firstNumber) == Number(secondNumber)}`);
document.write(`First greater: ${Number(firstNumber) > Number(secondNumber)}<br>`);
document.write(`Second greater: ${Number(firstNumber) < Number(secondNumber)}<br>`);
document.write(`Both are equal: ${Number(firstNumber) == Number(secondNumber)}<br>`);