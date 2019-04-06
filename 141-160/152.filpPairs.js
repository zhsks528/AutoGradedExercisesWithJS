// Flip every pair of characters in a string.

// example :

// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

function flipPairs(string) {
  var chunked = string.match(/.{1,2}/g);
  var flipped = chunked.map(function(x) {
    return x
      .split("")
      .reverse()
      .join("");
  });

  return flipped.join("");
}

var input =
  "check out how interesting this problem is, it's insanely interesting!";
var output = flipPairs(input);
console.log(output);
