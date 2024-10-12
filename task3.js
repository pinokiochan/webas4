let number = prompt("Enter a number:");
console.log(`You entered: ${number}`);
console.log(`Is the number even? ${number % 2 == 0}`);
console.log(`Is the number odd? ${number % 2 != 0}`);
console.log(`Is the number a multiple of 5? ${number % 5 ==0}`);
console.log(`Is the number greater than 10? ${number > 10}`);
if (number % 5 === 0 || number > 10) {
    console.log("The number is special!");
}else{
    console.log("The number is not special!");
}

document.write(`You entered: ${number} <br>`);
document.write(`Is the number even? ${number % 2 == 0} <br>`)
document.write(`Is the number odd? ${number % 2 != 0} <br>`)
document.write(`Is the number a multiple of 5? ${number % 5 == 0} <br>`)
document.write(`Is the number greater than 10? ${number > 10} <br>`)
if (number % 5 === 0 || number > 10) {
    document.write("The number is special!");
}else{
    document.write("The number is not special!");
}
