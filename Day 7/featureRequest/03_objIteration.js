// Create a sample object
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Novel",

  // Method to get a brief description of the book
  getDescription: function () {
    return `${this.title} is a ${this.genre} written by ${this.author} in ${this.year}.`;
  },
};

// Using for...in loop to iterate over the object's properties
console.log("Using for...in loop:");
for (let key in book) {
  if (book.hasOwnProperty(key)) {
    if (typeof book[key] === "function") {
      console.log(`${key}: ${book[key]()}`);
    } else {
      console.log(`${key}: ${book[key]}`);
    }
  }
}

console.log("\nUsing Object.keys and Object.values:");

// Using Object.keys to iterate over the object's keys
console.log("Keys:");
Object.keys(book).forEach((key) => {
  if (typeof book[key] === "function") {
    console.log(`${key}: ${book[key]()}`);
  } else {
    console.log(`${key}: ${book[key]}`);
  }
});

// Using Object.values to iterate over the object's values
console.log("\nValues:");
Object.values(book).forEach((value) => {
  if (typeof value === "function") {
    console.log(`Value: ${value()}`);
  } else {
    console.log(`Value: ${value}`);
  }
});
