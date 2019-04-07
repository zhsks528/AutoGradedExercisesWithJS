// You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// It looks like this:

// var currentInventory = [
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

// Look up all the shoes across all the designers and list them out in a array of array with format:

// [[designer name, shoe name, price], [designer name. shoe name, price], ....]

// E.g.,

// [
//   [Brunello Cucinelli, tasselled black low-top lace-up, 1000],
//   [Brunello Cucinelli, tasselled green low-top lace-up, 1100],
// ...
// ]

function renderInventory(inventory) {
  // your code here
  // hint: before you just dive into coding...
  // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
  var designerTotal = inventory.length;
  var fashionInventory = [],
    total = -1;

  for (var i = 0; i < designerTotal; i++) {
    let productsCount = inventory[i]["shoes"].length;
    //  console.log(productsCount);
    for (var j = 0; j < productsCount; j++) {
      //      for(var key in inventory[i]['shoes'][j]){
      //      }
      let fashionInventoryList = [];
      fashionInventoryList[0] = inventory[i]["name"];
      fashionInventoryList[1] = inventory[i]["shoes"][j]["name"];
      fashionInventoryList[2] = inventory[i]["shoes"][j]["price"];
      total = total + 1;
      fashionInventory[total] = fashionInventoryList;
    }
    //console.log(fashionInventory)
  }
  return fashionInventory;
}

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

var output = renderInventory(currentInventory);
console.log(output);
