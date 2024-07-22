// Function with default parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Log results of calling the function with different arguments
console.log(greet()); // Default parameters
console.log(greet("Alice")); // One argument
console.log(greet("Bob", "Hi")); // Both arguments
