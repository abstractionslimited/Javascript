class Singleton {
  private static instance: Singleton;
  private preferredColor: string;
  private constructor() {
    this.preferredColor = 'blue';
  }

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  // create a setter for the preferredColor
  static setPreferred(color: string): void {
    Singleton.instance.preferredColor = color;
  }
}

// client code

const singleton = Singleton.getInstance();
Singleton.setPreferred('red');
console.log(singleton);
