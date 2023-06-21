console.log('main page');
let Espresso = require('./beverages/espresso');
let Beverage = require('./beverages/beverage');
let beverage: Beverage = new Espresso();
console.log(beverage.getDescription() + ' $' + beverage.cost());
