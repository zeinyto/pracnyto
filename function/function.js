// create a function
  //declare
  function callMe () {
    console.log('Hello, World!');
  }
  //expression
  let callName = () => console.log('Hello, Ilham!');
  callMe();
  callName();

// arguments
  function sum () {
    let total = 0;
    for (let el of arguments)
      total += el;

    return total;
  }

  console.log(sum(5, 5, 5, 5));

// rest operator
  function totalPrice (disc, ...prices) {
    let totalPayments = prices.reduce ( (a, b) => a + b)
    return (totalPayments * (1 - disc));
  }

  console.log(totalPrice(0.5, 5000, 5000, 5000));

// default parameter
  function sumAll (price, disc, amount = 1) {
    return price * amount * (1-disc);
  }
  console.log(sumAll(7000, 0.5));

// setter and getter
let person = {
  firstName: 'Ilham',
  lastName: 'Nuryanto',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    let string = name.split(' ');
    this.firstName = string[0];
    this.lastName = string[1];
  }
}
  person.fullName = 'Indah Kartika'
  console.log(person.fullName);

// try and catch

let personTwo = {
  firstName: '-',
  lastName: '-',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    if(typeof name != 'string')
      throw new Error('Please give me a proper name.')

    let string = name.split(' ');
      if(string.length != 2)
        throw new Error('Please give me your first and lastname')

    this.firstName = string[0];
    this.lastName = string[1];
  }
}
  personTwo.fullName = 'dadang kamirun'
  console.log(personTwo.fullName);

//local and global scope
  let x = 10;

    if(true){
      let x = 20
      console.log(x);
    }
  console.log(x);
