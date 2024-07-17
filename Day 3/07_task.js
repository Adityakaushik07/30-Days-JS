const year = 2020;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`Year ${year} is a Leap year`);
    } else {
      console.log(`Year ${year} is not a Leap year`);
    }
  } else {
    console.log(`Year ${year} is a Leap year`);
  }
} else {
  console.log(`Year ${year} is not a Leap year`);
}
