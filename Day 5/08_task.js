function greeting(name, age = 21) {
  return `Hello ${name}, ${age}`;
}
// with age
console.log(greeting("Aditya", 25));
// without age
console.log(greeting("Aditya"));
