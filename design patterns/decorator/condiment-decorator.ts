/**
 * This class is interchangeable with a `Beverage` class, so we extend the `Beverage` class
 */
abstract class CondimentDecorator extends Beverage {
  /**
   * Beverage that will be wrapped  each Decorator.
   * Using `Beverage` class allows a Decorator to wrap any beverage
   */
  beverage: Beverage;

  /**
   * Condiment decorators are required to implement `getDescription ()`
   * `cost` gets implemented on subclasses
   */
  public abstract getDescription(): string;
}
