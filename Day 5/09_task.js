function callFunctionMultipleTimes(num, func) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

function exampleFunction() {
  console.log("Hello, world!");
}

callFunctionMultipleTimes(3, exampleFunction);
