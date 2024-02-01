class Animal {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const Abhinav = new Animal("Abhinav", 22);

Abhinav.greet();
