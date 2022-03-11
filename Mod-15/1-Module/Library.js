export default function()
{
    console.log("This is an Important task");
}

let message = "ES6 concept";

let displayName = (name) => {
  return `Hello ${name}`;
};

class Person {
  // properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // methods
  details() {
    console.log(`Name: ${this.name}  Age:${this.age}`);
  }
}

export { Person, displayName, message };