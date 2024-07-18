// Sample array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using map to transform array data (squaring each number)
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers:", squaredNumbers);

// Using filter to filter array data (selecting even numbers)
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Using reduce to aggregate array data (calculating sum of all numbers)
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);
