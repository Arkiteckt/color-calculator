const prompt = require('prompt-sync')({sigint: true});

let input = prompt ("Enter anything: ");

console.log(input);

let num1 = Number(prompt ("Enter purple: "));

let num2 = Number(prompt("Enter orange: "));

let num3 = Number(prompt("Enter green "));

let color = prompt("Enter an operation (+, -, *, /): ");

// console.log(num1 + num2);
console.log("Your equation is: " + num1 + " " + operation + " " + num2);

//check the operation
if(operation === '+') { //if this statement is true// do this everything inside of the curly brackets)
console.log("Addition!");
console.log(num1 + num2);
}
