/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let allcat = [];

  for (let i = 0; i < transactions.length; i++) {
    let category = transactions[i]["category"];
    if (!allcat.includes(category)) {
      allcat.push(category);
    }
  }

  let listobj = [];

  for (let i = 0; i < allcat.length; i++) {
    let totsum = 0;
    let obj = {};
    for (let j = 0; j < transactions.length; j++) {
      if (transactions[j]["category"] === allcat[i]) {
        totsum += transactions[j]["price"];
      }
    }
    let newobj = Object.assign({}, obj, { "category": allcat[i], "totalSpent": totsum });
    listobj.push(newobj);

  }

  return listobj;
}

module.exports = calculateTotalSpentByCategory;
