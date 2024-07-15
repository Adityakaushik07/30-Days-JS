// 2. Comparison and Logical Operators Script: 
// Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

let num1 = 10;
let num2 = 5;

// Comparison operators
console.log(`Comparison Operators:`);
console.log(`${num1} > ${num2}: ${num1 > num2}`);    // true
console.log(`${num1} < ${num2}: ${num1 < num2}`);    // false
console.log(`${num1} >= ${num2}: ${num1 >= num2}`);  // true
console.log(`${num1} <= ${num2}: ${num1 <= num2}`);  // false
console.log(`${num1} === ${num2}: ${num1 === num2}`); // false
console.log(`${num1} !== ${num2}: ${num1 !== num2}`); // true

// Logical operators
console.log(`\nLogical Operators:`);
console.log(`${num1} > ${num2} && ${num1 !== num2}: ${num1 > num2 && num1 !== num2}`);  // true && true = true
console.log(`${num1} < ${num2} || ${num1 !== num2}: ${num1 < num2 || num1 !== num2}`);  // false || true = true
console.log(`${num1} >= ${num2} && ${num1 === num2}: ${num1 >= num2 && num1 === num2}`); // true && false = false
console.log(`${num1} <= ${num2} || ${num1 === num2}: ${num1 <= num2 || num1 === num2}`); // false || false = false
