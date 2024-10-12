let name = prompt("Enter first name: ");
let surname = prompt("Enter last name: ");
let date = prompt("Enter your date of birth (YYYY-MM-DD): ");

let newDate = new Date(date);
let today = new Date();

let age = today.getFullYear() - newDate.getFullYear();
let MonthDifference = today.getMonth() - newDate.getMonth();

if(MonthDifference < 0 || (MonthDifference === 0 && today.getDate() < newDate.getDate())){
    age--;
}
let sentence = `My name is ${name} ${surname} and I am ${age} years old.`;
console.log(sentence);
document.write(sentence);