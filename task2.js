let age = prompt("Enter your age: ");
if(age >= 18){
    result = "Yes";
}else{
    result = "No";
}
console.log("Age: " + age);
console.log(`Driver's License ${result}`);
document.write(`Age: ${age} <br>`);
document.write(`Driver's License: ${result}`);