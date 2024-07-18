// Sample array of elements
const array = ["apple", "banana", "cherry", "date"];

// Using a for loop to iterate over the array and log each element
console.log("Logging elements using for loop:");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Using forEach method to iterate over the array and log each element
console.log("\nLogging elements using forEach method:");
array.forEach(element => {
  console.log(element);
});
