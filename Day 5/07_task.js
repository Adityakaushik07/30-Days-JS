const product = (num1, num2 = 2) => {
  return num1 * num2;
};
// without second value
console.log(product(10));

// with second value
console.log(product(10, 5));
