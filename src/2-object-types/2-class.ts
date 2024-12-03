class Car {
  make: string;
  model: string;
  year: string;

  constructor(make: string, model: string, year: string) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`${this.year} ${this.make} ${this.model} is driving`);
  }
}
let c = new Car("astin", "1", "2024");
console.log({ c });
