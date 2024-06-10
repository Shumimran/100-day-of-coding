"use strict";
// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a
//  string that represents a number (e.g., "5"). Return their sum as a number. 
function AddNumberAndString(number1, numberString) {
    return number1 + Number(numberString);
}
console.log(AddNumberAndString(10, "5"));
