// Write a function called "isEven".

// Given a number, "isEven" returns whether it is even.

// var output = isEven(11);
// console.log(output); // --> false

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
var output = isEven(11);
console.log(output);
