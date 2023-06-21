/**
 * Extends `Beverage` class since its a beverage
 */
class Espresso extends Beverage {
  /**
   * initializes an espresso instance with a description
   * @param description instance variable is inherited from `Beverage`
   */
  constructor() {
    super();
    super.description = 'Espresso';
  }
  /**
   * @returns price of an espresso
   */
  public cost(): number {
    return 10.0;
  }
}

export default Espresso;
