// JSON string representing a person object
const jsonString = '{"name": "Ram", "age": 23, "city": "delhi"}';

// Parsing JSON string to JavaScript object
const person = JSON.parse(jsonString);

// Accessing properties of JavaScript object
console.log(person.name); // Output: Ram
console.log(person.age); // Output: 23
console.log(person.city); // Output: delhi
