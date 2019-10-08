// create a single object

  let person = {
    name: 'Ilham Nuryanto',
    age: 21,
    job: 'Software Engineer'
  };

// create object using Factory function
  function createReact (xPos, yPos) {
    return {
      xPos,
      yPos,
      call () {
        console.log(`Create a rectangle on ${this.xPos} and ${this.yPos}`);
      }
    }
  }

  let RectOne = createReact(20, 50);
  console.log(RectOne);
  RectOne.call();

// create object using constructor function

  function Rect(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.call = () => console.log(`created a rectangle on ${this.xPos} and ${this.yPos}`);
  }

  let rectTwo = new Rect(40, 60);
  console.log(rectTwo);
  rectTwo.call();

  // to see the constructor that build the object
  console.log(RectOne.constructor);
  console.log(rectTwo.constructor);

  // adding and delete object properties or method after creating object

    rectTwo.callXpos = () => console.log(`x: ${rectTwo.xPos}`);
    console.log(rectTwo);
    rectTwo.callXpos(); 
    delete rectTwo.callXpos;
    console.log(rectTwo);

// call, apply and bind => this used to create a function and apply an object to it
  let arr = [1,2,3];

  let callme = function (a, b, c) {
    console.log(this.xPos + a + b + c);
  } 
    // call to pass a value argument
  callme.call(rectTwo, 2);
    //apply to pass an array argument
  callme.apply(RectOne, arr);
    // bind to apply the function to other variable
    let fifi = callme.bind(rectTwo);
    fifi(1,2,3);

// enumarating object key values
  for(items of Object.keys(rectTwo))
    console.log(items);

  for(items of Object.values(rectTwo))
    console.log(items);

  for(items in rectTwo) 
    console.log(items, rectTwo[items]);

  Object.keys(RectOne).forEach(items => console.log(items))

// Cloning an object

  let a = {...rectTwo, ...person};
  console.log(a);


  

