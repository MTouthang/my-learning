class Meal {
  constructor(name, type) {
    this._name = name;
    this._type = type;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = newName;
  }

  // Getter for type
  get type() {
    return this._type;
  }

  // Setter for type
  set type(newType) {
    this._type = newType;
  }

  describe() {
    console.log(`This is a ${this._type} meal named ${this._name}.`);
  }
}

const meal1 = new Meal('Breakfast', 'healthy');
console.log(meal1.name); // Output: Breakfast
console.log(meal1.type); // Output: healthy

meal1.name = 'Brunch'; // Using the setter for name
meal1.type = 'delicious'; // Using the setter for type

console.log(meal1.name); // Output: Brunch
console.log(meal1.type); // Output: delicious
meal1.describe(); // Output: This is a delicious meal named Brunch.
