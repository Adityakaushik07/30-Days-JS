const library = {
  name: "non fiction",
  books: [
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      year: 2011,
    },
    {
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      year: 2010,
    },
    {
      title: "Becoming",
      author: "Michelle Obama",
      year: 2018,
    },
    {
      title: "Educated",
      author: "Tara Westover",
      year: 2018,
    },
  ],
};
// Name of library
console.log(library.name);

// titles of the book in this library
library.books.forEach((book) => {
  console.log(book.title);
});
