// create an array
let numbers = [1, 2 ,3];
let people = [
  {name: 'Andre', age: 20},
  {name: 'Doni', age: 22},
  {name: 'Cika', age: 12},
  {name: 'Badrun', age: 30}
]

let empty = [2, 'a', 44];

// add new element

numbers.unshift(0); // front
  //actually you can add new alement in any position using splice
numbers.splice(1, 0, 0.5);
numbers.push(4); // back

console.log(numbers);

// remove element
numbers.shift();
numbers.splice(0, 1);
numbers.pop();
console.log(numbers);

// finding element within array
  //primitive
    //return index
   console.log(numbers.indexOf(21));
    //return true or false statement
   console.log(numbers.includes(2));
  //reference
    //return object
  console.log(people.find(el => el.name === 'Badrun'));
    //return index
  console.log(people.findIndex(el => el.name === 'Cika'));

// emptying an array
  console.log('the length of array: ', empty);
  empty.length = 0;
  console.log('after emptying it : ', empty);

//combining array

  let combined = [...people, ...numbers, 'digabung'];
  console.log(combined);

// slicing array
  let sliced = numbers.slice(0, 2);
  console.log(sliced);

// iterating
  for(let el of people)
    console.log(el.name);

  people.forEach(items => console.log(items.age))

// joining array
  let joined = numbers.join('=>')
  console.log(joined);

//sorting array
  //primitive
  let orderedNumbers = numbers.sort().reverse()
    console.log(orderedNumbers);

  let alphabet = people.sort( (a, b) => {
    return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
  });
  console.log(alphabet);

  let age = people.sort( (a, b) => a.age - b.age);
  console.log(age);

// test element within array
  // all of them match the criteria
  let result = numbers.every(el => el > 0);
  console.log(result);
  //at least one match the criteria
  let result2 = people.some(el => el.age > 29);
  console.log(result2);

// filter array 
  let oldGuy = people.filter(el => el.age > 29);
  console.log(oldGuy);
// mapping array
  let mapped = people.map(el => (el.age > 29) ? 'old' : 'young');
  console.log(mapped);
// reduce array
  let sum = people.reduce( (init, current) => {
    let age = current.age
    return init + age;
  }, 0)

  console.log(sum);
