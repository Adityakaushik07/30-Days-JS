const marks = 38;
let grade;

switch (true) {
  case marks >= 90:
    grade = "A";
    break;

  case marks >= 80:
    grade = "B";
    break;

  case marks >= 70:
    grade = "C";
    break;

  case marks >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log(`Your Marks is : ${marks} \nYour grade is : ${grade}`);
