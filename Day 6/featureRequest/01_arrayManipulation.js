// Creating an empty array
let array = [];

// Adding elements using push method
array.push(1);         // array: [1]
array.push(2);         // array: [1, 2]
array.push(3);         // array: [1, 2, 3]

console.log("Array after push operations:", array);

// Adding elements using unshift method
array.unshift(0);      // array: [0, 1, 2, 3]
array.unshift(-1);     // array: [-1, 0, 1, 2, 3]

console.log("Array after unshift operations:", array);

// Removing elements using pop method
let poppedElement = array.pop();    // array: [-1, 0, 1, 2], poppedElement: 3
console.log("Array after pop operation:", array);
console.log("Popped element:", poppedElement);

// Removing elements using shift method
let shiftedElement = array.shift(); // array: [0, 1, 2], shiftedElement: -1
console.log("Array after shift operation:", array);
console.log("Shifted element:", shiftedElement);
