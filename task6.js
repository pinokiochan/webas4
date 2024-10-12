let colorcount = prompt("How many colors do you want input?");

let colors = [];

for(i = 0; i < colorcount; i++){
    let color  = prompt(`Enter colors ${i + 1}`);
    colors.push(color);
}
if(colors.length > 0){
    console.log(`First color: ${colors[0]}`);
    console.log(`Last color: ${colors[colors.length - 1]}`);
    document.write(`First color: ${colors[0]} <br>`);
    document.write(`Last color: ${colors[colors.length - 1]}`);
}else{
    console.log("Not entered");
    document.write("Not entered");
}
