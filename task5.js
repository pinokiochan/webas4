function area(width, length){
    return width * length;
}

let width = Number(prompt("Enter a width: "));
let length = Number(prompt("Enter a length: "));

let res = area(width,length);

document.write(`Initial width: ${width} <br>`);
document.write(`Initial length: ${length} <br>`);
document.write(`Initial area: ${res} <br>`);

console.log(`Initial width: ${width}`);
console.log(`Initial length: ${length}`);
console.log(`Initial area: ${res}`);

let update = prompt("Will you update your choice(width/length) ? ").toLowerCase();
if(update == "width"){
    let newWidth = Number(prompt("Enter new width: "));
    width = newWidth;
}else if(update == "length"){
    let newLength = Number(prompt("Enter new length: "));
    length = newLength;
}else{
    document.write(`Invalid choice <br>`);
    console.log("Invalid choice");
}

let newArea = area(width,length);
document.write(`New Width: ${width} <br>`);
document.write(`New Length: ${length} <br>`);
document.write(`New Area: ${newArea}`);
console.log(`New width: ${width}`);
console.log(`New length: ${length}`);
console.log(`New area: ${newArea}`);    


