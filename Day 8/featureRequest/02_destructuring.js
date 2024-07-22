// Array destructuring
const array = [1, 2, 3, 4, 5];

// Extract the first two elements
const [first, second] = array;
console.log(`First: ${first}, Second: ${second}`);

// Extract elements with the rest operator
const [one, two, ...rest] = array;
console.log(`One: ${one}, Two: ${two}, Rest: ${rest}`);

// Object destructuring
const person = {
  name: "Aditya",
  age: 25,
  profession: "Engineer",
  address: {
    city: "Meerut",
    country: "India",
  },
};

// Extract properties from the object
const { name, age, profession } = person;
console.log(`Name: ${name}, Age: ${age}, Profession: ${profession}`);

// Extract nested properties
const {
  address: { city, country },
} = person;
console.log(`City: ${city}, Country: ${country}`);

// Rename variables while destructuring
const { name: firstName, age: years } = person;
console.log(`First Name: ${firstName}, Years: ${years}`);

// Provide default values while destructuring
const { phone = "Not provided" } = person;
console.log(`Phone: ${phone}`);

// Function parameters destructuring
function displayPerson({ name, age, profession }) {
  console.log(`Person's Name: ${name}, Age: ${age}, Profession: ${profession}`);
}

displayPerson(person);
