// Task 10 :
// Write a program to compare two numbers using == and === and log the result to the console

const num1 = 10;
const num2 = "10";

// Using ==
const isEqualWithDoubleEqual = num1 == num2;
console.log(`Using ==: ${num1} == ${num2} => ${isEqualWithDoubleEqual}`);

let isEqualWithTripleEqual = num1 === num2;
console.log(`Using ===: ${num1} === ${num2} => ${isEqualWithTripleEqual}`);
