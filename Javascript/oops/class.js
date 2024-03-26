class Meal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  describe() {
    console.log(`This is a ${this.type} meal named ${this.name}.`);
  }
}

const meal1 = new Meal('Breakfast', 'healthy');
meal1.describe(); // Output: This is a healthy meal named Breakfast.
