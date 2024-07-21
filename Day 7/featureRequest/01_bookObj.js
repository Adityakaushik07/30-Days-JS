// Create a book object
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Novel",

  // Method to get a brief description of the book
  getDescription: function () {
    return `${this.title} is a ${this.genre} written by ${this.author} in ${this.year}.`;
  },

  // Method to check if the book is a classic (published more than 50 years ago)
  isClassic: function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year > 50;
  },
};

// Log all keys of the book object
console.log("Keys:");
Object.keys(book).forEach((key) => {
  console.log(`${key}: ${book[key]}`);
});

// Log all values of the book object
console.log("\nValues:");
Object.values(book).forEach((value) => {
  console.log(`Value: ${value}`);
});

// Log the results of the methods
console.log("\nMethod Results:");
console.log(`getDescription: ${book.getDescription()}`);
console.log(`isClassic: ${book.isClassic()}`);
