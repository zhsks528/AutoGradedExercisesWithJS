// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

// example:

// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

function detectOutlierValue(string) {
  var newArray = [];
  var oddArray = [];
  var evenArray = [];
  var outlier = 0;
  newArray = string.split(" ").map(Number);
  for (let i in newArray) {
    if (newArray[i] % 2 === 0) {
      evenArray.push(newArray[i]);
    } else {
      oddArray.push(newArray[i]);
    }
  }
  if (evenArray.length < oddArray.length) {
    outlier = newArray.indexOf(evenArray[0]);
  } else {
    outlier = newArray.indexOf(oddArray[0]);
  }
  return outlier + 1;
}
var test1 = "2 4 7 8 10";
var test2 = "1 10 1 1";

var output = detectOutlierValue(test1);
console.log(output);
