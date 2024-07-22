// Variables used for computed property names
const key1 = "firstName";
const key2 = "lastName";
const key3 = "age";

// Creating an object with computed property names
const person = {
  [key1]: "John",
  [key2]: "Doe",
  [key3]: 25,
};

// Logging the object to the console
console.log(person);

// Accessing properties using computed property names
console.log(person[key1]); // Output: John
console.log(person[key2]); // Output: Doe
console.log(person[key3]); // Output: 25
