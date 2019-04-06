// Write a function called "convertDoubleSpaceToSingle".

// Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.

// var output = convertDoubleSpaceToSingle("string  with  double  spaces");
// console.log(output); // --> "string with double spaces"

// Notes:* In order to do this problem, you should be familiar with "String.split", and "Array.join".

function convertDoubleSpaceToSingle(str) {
  var a = str.split("  ");
  var b = a.join(" ");
  return b;
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);
