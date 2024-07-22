const person = {
  name: "Alice",
  age: 30,

  // Method defined with shorthand syntax
  greet() {
    return `Hello, my name is ${this.name}.`;
  },

  // Method using a function expression
  sayAge: function () {
    return `I am ${this.age} years old.`;
  },
};

// Logging the object to the console
console.log(person);

// Calling methods and accessing properties
console.log(person.greet()); // Output: Hello, my name is Alice.
console.log(person.sayAge()); // Output: I am 30 years old.
