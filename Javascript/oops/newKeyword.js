// Constructor function for creating Person objects
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating a new instance of Person using the new keyword
let person1 = new Person('John', 30);

// Accessing properties of the instance
console.log(person1.name); // Output: John
console.log(person1.age); // Output: 30
