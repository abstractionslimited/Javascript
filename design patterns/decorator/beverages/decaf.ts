class Decaf extends Beverage {
  constructor() {
    super();
    this.description = 'Decaf';
  }
  // create typescript constructor
  // initialize the instance variable description with the appropriate description
  // implement cost method and return the appropriate cost

  public cost(): number {
    return 15.0;
  }
}
