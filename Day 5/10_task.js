function applyFunctions(value, func1, func2) {
  return func2(func1(value));
}

function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

const result = applyFunctions(3, double, square);
console.log(result);
