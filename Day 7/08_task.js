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

// Iterate over each book in the books array
for (let i = 0; i < library.books.length; i++) {
  let book = library.books[i];
  console.log(`Book ${i + 1}:`);
  
  // Use for...in loop to iterate over properties of each book object
  for (let property in book) {
    console.log(`${property}: ${book[property]}`);
  }
  
  console.log("\n");  // Add a newline for better readability
}
