const book = {
  title: "Atomic habit",
  author: "James Clear",
  year: 2018,
  bookInfo: function () {
    const info = `Title is : ${this.title} \nauthor is : ${this.author}`;
    return info
  },
};
console.log(book.bookInfo());
