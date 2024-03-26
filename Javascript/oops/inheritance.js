// parent class
class PW {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// inheriting parent class
class Skills extends PW {}

let student1 = new Skills('PW skills');
student1.greet();
