const propName = "dynamicProp";

const person = {
    name: "John",
    age: 30,
    // Method definition shorthand
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
    // Computed property name
    [propName]: "This is a dynamic property"
};

// Log the object
console.log(person);

// Call the method
person.greet();
