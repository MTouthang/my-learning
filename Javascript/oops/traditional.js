// Parent constructor function
function Parent(name) {
  this.name = name;
}

// Method in parent constructor function
Parent.prototype.sayHello = function () {
  console.log('Hello, my name is ' + this.name);
};

// Creating an instance
var parentObj = new Parent('John');

// Calling the method
parentObj.sayHello(); // Outputs: Hello, my name is John
