// Write a function called "getStringLength".

// Given a string, "getStringLength" returns the length of the given string.

// Notes:
// * Do NOT use any native 'length' methods.
// * You might consider using 'substring' or 'slice' as alternatives.

// var output = getStringLength('hello');
// console.log(output); // --> 5

function getStringLength(string) {
  count = 0;
  for (var item in string) {
    count++;
  }
  return count;
}

function getStringLength(string) {
  var i = 0;
  while (string.substring(0, i) !== string) {
    i++;
  }
  return i;
}

var output = getStringLength("hello");
console.log(output);
