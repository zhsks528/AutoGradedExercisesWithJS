// Write a function called "equalsTen".

// Given a number, "equalsTen" returns whether or not the given number is 10.

// var output = equalsTen(9);
// console.log(output); // --> false

function equalsTen(num) {
  if (num == 10) {
    return true;
  } else {
    return false;
  }
}
var output = equalsTen(9);
console.log(output);
