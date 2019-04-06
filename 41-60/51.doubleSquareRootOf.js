// Write a function called "doubleSquareRootOf".

// Given a number, "doubleSquareRootOf" returns double its square root.

// var output = doubleSquareRootOf(121);
// console.log(output); // --> 22

function doubleSquareRootOf(num) {
  return Math.sqrt(num) + Math.sqrt(num);
}

var output = doubleSquareRootOf(121);
console.log(output);
