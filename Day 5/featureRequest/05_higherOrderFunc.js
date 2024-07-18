function applyFunctionNTimes(value, func, n) {
  let result = value;
  for (let i = 0; i < n; i++) {
    result = func(result);
  }
  return result;
}

function double(x) {
  return x * 2;
}

const result = applyFunctionNTimes(3, double, 3);
console.log(result);
