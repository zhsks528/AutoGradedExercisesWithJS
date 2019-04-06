// Write a function called "removeStringValues".

// Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

// var obj = {
//   name: 'Sam',
//   age: 20
// }
// removeStringValues(obj);
// console.log(obj); // { age: 20 }

function removeStringValues(obj) {
  for (var item in obj) {
    if (typeof obj[item] === "string") {
      delete obj[item];
    }
  }
  return obj;
}

var obj = {
  name: "Sam",
  age: 20
};

removeStringValues(obj);
console.log(obj);
