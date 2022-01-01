class Vehicle {
  constructor(public color: string) {};

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// Inheritance and overwriting methods of the parent class

class Motorcycle extends Vehicle{
  constructor(public wheels: number, color: string) {
    super(color);
  };

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }

}

const motorcycle = new Motorcycle(4,'red');

motorcycle.startDrivingProcess();