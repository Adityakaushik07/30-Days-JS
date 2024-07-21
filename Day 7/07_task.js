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
library.books.forEach((book) => {
  console.log(book.getBookInfo());
});
