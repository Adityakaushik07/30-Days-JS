// Using the spread operator to combine arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log('Combined Array:', combinedArray);

// Using the rest operator to handle multiple function arguments
function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log('Sum:', result);
