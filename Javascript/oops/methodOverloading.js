// Animal class
class Animal {
  constructor() {}

  // Method in Animal class
  speak() {
    console.log('Animal speaks');
  }
}

// Dog class inheriting from Animal
class Dog extends Animal {
  constructor() {
    super(); // Call Animal constructor
  }

  // Override the method in Dog class
  speak() {
    console.log('Woof woof!');
  }
}

// Creating instances
let animalObj = new Animal();
let dogObj = new Dog();

// Calling methods
animalObj.speak(); // Outputs: Animal speaks
dogObj.speak(); // Outputs: Woof woof!
