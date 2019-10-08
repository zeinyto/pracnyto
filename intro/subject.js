// Object

let Person = {
  name: 'ilham',
  age: '21',
  job: 'Software engineer',
  describe () {
    console.log(`Hello my name is ${this.name}, i'm ${this.age} years old and working as a ${this.job}.`);
  }
};

// Array

let numbers = [1, 2, 3, 4, 5];
let price = [
  {name: 'okonomiyaki', price: 20000},
  {name: 'Teh Sisri', price: 15000}
]

// Function
  //old ways
function callMyName () {
  console.log(`Hello, ${Person.name}!`);
}

  //new way

callName = () => console.log(`Hello, ${Person.name}!`);

callMyName();
callName();