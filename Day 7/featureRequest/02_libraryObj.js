// Define the library object
const library = {
  name: "City Library",
  location: "Downtown",
  books: [
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      year: 2011,
      genre: "Non-fiction",
      getBookInfo: function () {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Genre: ${this.genre}`;
      },
    },
    {
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      year: 2010,
      genre: "Biography",
      getBookInfo: function () {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Genre: ${this.genre}`;
      },
    },
    {
      title: "Becoming",
      author: "Michelle Obama",
      year: 2018,
      genre: "Memoir",
      getBookInfo: function () {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Genre: ${this.genre}`;
      },
    },
    {
      title: "Educated",
      author: "Tara Westover",
      year: 2018,
      genre: "Memoir",
      getBookInfo: function () {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Genre: ${this.genre}`;
      },
    },
  ],

  // Method to get library info
  getLibraryInfo: function () {
    return `${this.name}, located at ${this.location}, has a collection of books.`;
  },
};

// Log the library details
console.log("Library Details:");
console.log(library.getLibraryInfo());

// Iterate over the books array and log each book's details
library.books.forEach((book, index) => {
  console.log(`\nBook ${index + 1} Details:`);

  // Log all keys and values of the book object
  Object.keys(book).forEach((key) => {
    if (typeof book[key] === "function") {
      console.log(`${key}: ${book[key]()}`);
    } else {
      console.log(`${key}: ${book[key]}`);
    }
  });
});
