// Define variables
const firstName = "Aditya";
const lastName = "Kaushik";
const age = 21;
const profession = "Software Developer";

// Create a string with embedded variables using template literals
const greeting = `Hello, my name is ${firstName} ${lastName}. I am ${age} years old and I work as a ${profession}.`;

console.log(greeting);

// Create a multi-line string using template literals
const multiLineString = `
This is a multi-line string.
You can write text on a new line
without using escape characters.

You can also embed variables like this:
Name: ${firstName} ${lastName}
Age: ${age}
Profession: ${profession}
`;

console.log(multiLineString);

