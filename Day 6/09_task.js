const num = [5, 10, 15, 20, 25];
const total = num.reduce((prev, curr) => {
  return prev + curr;
}, 0);

console.log(total);
