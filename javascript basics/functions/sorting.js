// create list of products with name and price properties

let products = [
  { name: 'Grapefruit', calories: 170, color: 'red', sold: 8200 },
  { name: 'Orange', calories: 160, color: 'orange', sold: 12101 },
  { name: 'Cola', calories: 210, color: 'caramel', sold: 25412 },
  { name: 'Diet Cola', calories: 0, color: 'caramel', sold: 43922 },
  { name: 'Lemon', calories: 200, color: 'clear', sold: 14983 }
];

// function compareSold(colaA, colaB)
function compareSold(params) {
  if (params.sold > params.sold) {
    return 1;
  } else if (params.sold === params.sold) {
    return 0;
  } else {
    return -1;
  }
}

// compare by calories
function compareCalories(colaA, colaB) {
  if (colaA.calories > colaB.calories) {
    return 1;
  } else if (colaA.calories === colaB.calories) {
    return 0;
  } else {
    return -1;
  }
}
products.sort(compareCalories);
// products.sort(compareSold);
console.log(products);
