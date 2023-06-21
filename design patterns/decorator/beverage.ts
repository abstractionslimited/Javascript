/**
 * Beverage is an abstract class with two methods:
 * `getDescription ()`
 * `cost ()`
 */
abstract class Beverage {
  description: string = 'unknown beverage';

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
  constructor(parameters) {}
}

module.exports = Beverage;
