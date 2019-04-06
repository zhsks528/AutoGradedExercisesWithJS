// Is one string a rotated version of another?

// example :

// String 1: 'hello world'
// String 2: 'orldhello w'
// --> true

function isRotated(str1, str2) {
  var tripledString = str1 + str1 + str1;
  if (tripledString.includes(str2)) {
    return true;
  } else {
    return false;
  }
}

var output = isRotated("hello world", "orldhello w");
console.log(output);
