const num1 = 96;
const num2 = 78;
const num3 = 42;

let largest;
if (num1 >= num2) {
  if (num1 >= num3) {
    largest = num1;
  } else {
    largest = num3;
  }
} else {
  if (num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }
}
console.log(`The largest number among ${num1} ${num2} ${num3} is : ${largest}`);
