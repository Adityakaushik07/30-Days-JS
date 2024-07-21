const library = {
  name: "non fiction",
  books: [
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      year: 2011,
      getBookInfo: function () {
        return `Title = ${this.title}, Year ${this.year}`;
      },
    },
    {
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      year: 2010,
      getBookInfo: function () {
        return `Title = ${this.title}, Year ${this.year}`;
      },
    },
    {
      title: "Becoming",
      author: "Michelle Obama",
      year: 2018,
      getBookInfo: function () {
        return `Title = ${this.title}, Year ${this.year}`;
      },
    },
    {
      title: "Educated",
      author: "Tara Westover",
      year: 2018,
      getBookInfo: function () {
        return `Title = ${this.title}, Year ${this.year}`;
      },
    },
  ],
};

// Iterate over the books array
library.books.forEach((book, index) => {
  console.log(`Book ${index + 1}:`);

  // Log all keys of the book object
  let keys = Object.keys(book);
  keys.forEach((key) => {
    console.log(`${key}: ${book[key]}`);
  });

  // Log all values of the book object
  let values = Object.values(book);
  values.forEach((value) => {
    console.log(`Value: ${value}`);
  });

  console.log(""); // Newline for better readability
});
