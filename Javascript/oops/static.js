class Car {
  static MAX_SPEED = 120; // Static property

  static calculateSpeed(distance, time) {
    return distance / time;
  }
}

console.log(Car.MAX_SPEED); // Output: 120
const speed = Car.calculateSpeed(100, 2); // Call static method
console.log(speed); // Output: 50
