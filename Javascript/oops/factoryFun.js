function createPerson(name, id) {
  return {
    name: name,
    age: id,
    greet: function () {
      console.log(
        `Hello, my name is ${this.name} and I employee id is ${this.age}.`
      );
    },
  };
}

const person2 = createPerson('Bob', 221);
person2.greet();
