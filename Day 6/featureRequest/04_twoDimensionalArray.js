// Creating a two-dimensional array (3x3 matrix)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Logging the initial matrix
console.log("Initial matrix:");
matrix.forEach(row => console.log(row));

// Accessing and modifying a specific element
matrix[1][1] = 10; // Changing the element at row 1, column 1 to 10
console.log("\nMatrix after modifying element at row 1, column 1:");
matrix.forEach(row => console.log(row));

// Adding a new row
matrix.push([10, 11, 12]);
console.log("\nMatrix after adding a new row:");
matrix.forEach(row => console.log(row));

// Removing the last row
matrix.pop();
console.log("\nMatrix after removing the last row:");
matrix.forEach(row => console.log(row));

// Adding a new column to each row
matrix.forEach(row => row.push(row[row.length - 1] + 1));
console.log("\nMatrix after adding a new column:");
matrix.forEach(row => console.log(row));

// Removing the last column from each row
matrix.forEach(row => row.pop());
console.log("\nMatrix after removing the last column:");
matrix.forEach(row => console.log(row));
