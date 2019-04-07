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

// Now output the average cost of all shoes per designer in this format:

// var expected = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// };

var currentInventory = [
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

function renderAverageCostPerDesigner(inventory) {
  return {
    designers: renderAverageShoeCostPerDesigner(inventory)
  };
}

function renderAverageShoeCostPerDesigner(inventory) {
  return inventory.map(function(goodsByDesigner) {
    return {
      name: goodsByDesigner.name,
      averagePrice: computeAverageCostOfShoes(goodsByDesigner)
    };
  });
}

function computeSum(values) {
  return values.reduce(function(a, b) {
    return a + b;
  }, 0);
}

function computeTotalCost(shoeList) {
  var prices = shoeList.map(function(shoe) {
    return shoe.price;
  });
  return computeSum(prices);
}

function computeAverageCostOfShoes(goodsByDesigner) {
  var shoeList = goodsByDesigner.shoes;
  var totalCost = computeTotalCost(shoeList);
  return totalCost / shoeList.length;
}

console.log(renderAverageCostPerDesigner(currentInventory));
