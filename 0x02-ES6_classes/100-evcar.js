import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(); // Call the parent class constructor
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    // Return an instance of Car instead of EVCar
    const clonedCar = new Car();
    clonedCar._brand = this._brand;
    clonedCar._motor = this._motor;
    clonedCar._color = this._color;
    return clonedCar;
  }
}

