let name = prompt("Enter your name: ");
let age = Number(prompt("Enter your age: "));
let hobby = prompt("Tell about your hobby: ");

let userdetail = {
    name: name,
    age: age,
    hobby: hobby
}
console.log(userdetail);
document.write(`Name: ${userdetail.name} <br>`)
document.write(`Age: ${userdetail.age} <br>`)
document.write(`Hobby: ${userdetail.hobby} <br>`)

