// create a DarkRoast  class that extends the Beverage class
class DarkRoast extends Beverage {
  // initialize the instance variable description with the appropriate description
  constructor() {
    super();
    this.description = 'Dark Roast';
  }
  // implement cost method and return the appropriate cost
  cost() {
    return 13.0;
  }
}
