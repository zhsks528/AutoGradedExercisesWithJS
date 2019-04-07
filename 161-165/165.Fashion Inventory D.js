// This is a variation of the "Fashion Inventory" problem.

// Please DO NOT paste code from before, however. Tackle each problem on its own.

// It's the same inventory data structure:

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
// The task now is to find all the laced shoes. Output shoe names that contain "lace" in them, and indicate which word contains "lace".
// The output format should be structured like this:

// [
//   {
//     "nameWords": [
//       "tasselled",
//       "black",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "tasselled",
//       "green",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "red",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   },
//   {
//     "nameWords": [
//       "black",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   }
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

function getLaceNameDataForShoes(shoeInventory) {
  var listShoesWithLace = [];
  for (var i = 0; i < shoeInventory.length; i++) {
    for (var x = 0; x < shoeInventory[i].shoes.length; x++) {
      var shoesWithLace = {};
      var shoeNameString = shoeInventory[i].shoes[x].name;
      if (shoeNameString.includes("lace")) {
        // true for "lace-up" and "laced"
        shoesWithLace.nameWords = shoeNameString.split(" ");
        if (shoesWithLace.nameWords.includes("lace-up")) {
          shoesWithLace.targetWordIndex = shoesWithLace.nameWords.indexOf(
            "lace-up"
          );
        }
        if (shoesWithLace.nameWords.includes("laced")) {
          shoesWithLace.targetWordIndex = shoesWithLace.nameWords.indexOf(
            "laced"
          );
        }
        listShoesWithLace.push(shoesWithLace);
      }
    }
  }
  return listShoesWithLace;
}

getLaceNameDataForShoes(inventory);
