// Parent class
class Parent {
  constructor(name) {
    this.name = name;
  }

  // Method in parent class
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Creating an instance
let parentObj = new Parent('John');

// Calling the method
parentObj.sayHello(); // Outputs: Hello, my name is John
