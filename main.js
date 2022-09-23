// const prompt = require('prompt-sync')({sigint: true});

// let input = prompt ("Enter anything: ");

// console.log(input);

// let num1 = Number(prompt ("Enter purple: "));

// let num2 = Number(prompt("Enter orange: "));

// let num3 = Number(prompt("Enter green "));

// let color = prompt("Enter an operation (+, -, *, /): ");

// // console.log(num1 + num2);
// console.log("Your equation is: " + num1 + " " + operation + " " + num2);

// //check the operation
// if(operation === '+') { //if this statement is true// do this everything inside of the curly brackets)
// console.log("Addition!");
// console.log(num1 + num2);
// }


//Your program should prompt the user for whether they want to combine colors or deconstruct a color (it's up to you what this user interface looks like exactly).
const prompt = require('prompt-sync')({sigint: true});

let input = prompt ("Let's combine colors!: ");

// console.log(input);

//If the user chooses to combine, prompt them for two colors (one at a time). Combine the colors (using if, else if, and else statements) then log the result.
let num1 = Number(prompt ("Enter red: "));

let num2 = Number(prompt("Enter blue: "));

let input2 = prompt ("What do you think will be the result of this mixture?: ");

if (num1 === num2) {
    Answer = "Purple";
    } else {
    Answer = "Try Again";
  }
