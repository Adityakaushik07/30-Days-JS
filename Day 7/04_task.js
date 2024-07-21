const book = {
  title: "Atomic habit",
  author: "James Clear",
  year: 2018,

  updateYear: function (newYear) {
    this.year = newYear;
    console.log(this);
  },
};
book.updateYear(2023);
