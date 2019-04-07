// This is a variation of the "Fashion Inventory" problem.

// Please DO NOT paste code from before, however. Tackle each problem on its own.
// It's the same inventory data structure as earlier:

// var inventory = [
//   {
//     name: 'Brunello Cucinelli',
//     shoes: [
//       {name: 'tasselled black low-top lace-up', price: 1000},
//       {name: 'tasselled green low-top lace-up', price: 1100},
//       {name: 'plain beige suede moccasin', price: 950},
//       {name: 'plain olive suede moccasin', price: 1050}
//     ]
//   },
//   {
//     name: 'Gucci',
//     shoes: [
//       {name: 'red leather laced sneakers', price: 800},
//       {name: 'black leather laced sneakers', price: 900}
//     ]
//   }
// ];

// Now find all the black shoes. It's the same output as part 1, but filtered to only shoe names that contain "black" in them.

// [
//    [Brunello Cucinelli,tasselled black low-top lace-up,1000],
//    [Gucci,black leather laced sneakers,900]
// ]

var inventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 }
    ]
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 }
    ]
  }
];

function filterBlackShoes(shoeInventory) {
  var blackShoeArr = [];
  var inShoeArr = [];
  for (var i = 0; i < shoeInventory.length; i++) {
    for (var x = 0; x < shoeInventory[i].shoes.length; x++) {
      var shoeNameString = shoeInventory[i].shoes[x].name;
      if (shoeNameString.indexOf("black") !== -1) {
        inShoeArr.push(
          shoeInventory[i].name,
          shoeInventory[i].shoes[x].name,
          shoeInventory[i].shoes[x].price
        );
      }
    }
  }
  blackShoeArr.push(inShoeArr.slice(0, 3), inShoeArr.slice(3, 6));

  return blackShoeArr;
}

console.log(filterBlackShoes(inventory));
