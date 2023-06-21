const CondimentDecorator = require('../condiment-decorator');
const Beverage = require('../beverage');
// Mocha is a decorator, so we extend CondimentDecorator
class Mocha extends CondimentDecorator {
  // We need to keep a reference to the beverage we are wrapping
  constructor(beverage: typeof Beverage) {
    super();
    // this.beverage is the beverage we are wrapping (e.g. Dark Roast)
    this.beverage = beverage;
  }

  public get description(): string {
    // this.beverage.getDescription() is the description of the beverage we are decorating (e.g. Dark Roast)
    return this.beverage.getDescription() + ', Mocha';
  }

  public cost(): number {
    // this.beverage.cost() is the cost of the beverage we are decorating (e.g. Dark Roast)
    return 0.2 + this.beverage.cost();
  }
}
