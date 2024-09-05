// using object initializer
const obj = {
  property1: 4,
  2: 6,
  property3: "a",
};
// console.log(obj);
// console.log(obj["2"]);
// console.log(obj["property3"]);
// console.log(obj.property1);

// creating object on condition
let x;
cond = 1;
if (cond) {
  x = { greeting: "Hey dear" };
}

// creating object with object that has a property of a value object
const myHonda = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2,
  },
};
// console.log(myHonda);
// console.log(myHonda.engine.cylinders);
// console.log(myHonda["engine"]["cylinders"]);

/* USING A CONSTRUCTOR FUNCTION */
function Car(make, model, year) {
  (this.make = make), (this.model = model), (this.year = year);
}

// create an object og the Car
const myCar = new Car("Toyota", "RAV4", 2008);
// console.log(myCar.make);
// console.log(myCar.model);
// console.log(myCar.year);

// an object can have a property that is itself a property of another object
function Person(name, sex, age) {
  (this.name = name), (this.sex = sex), (this.age = age);
}

const rand = new Person("Rand", "M", 36);

// rewrite the Car Object to contains an owner's property
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

const car1 = new Car("Mercedez", "B190", 1993, rand);
// console.log(car1.owner.name);
// console.log(car1.owner.sex);
// console.log(car1.owner.age);

// ADD A PROPERTY TO A PREVIOUSLY DEFINED OBJECT
car1.color = "black";
// console.log(car1); // this will only affect the car1 and not the whole Car
// console.log(Car);

/* USING THE Object.create() method */

// animal properties and method encapsulation
const Animal = {
  type: "Invertebrates", // default value of the properties
  displayType() {
    // method which will display type of animal
    console.log(this.type);
  },
};

// create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // will logs out invertbrates

// create new animal called fish
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // will logs out Fishes

/* OBJECTS AND PROPERTIES */
const myCar2 = {
  make: "Ford",
  type: "Mustang",
  year: 1993,
}; // NB: all keys are converted to strings

// accessing properties
// dot notation
console.log(myCar2.make);
//bracket notation
console.log(myCar2["make"]);

// An object property name can be any JavaScript string or symbol,
// including an empty string.
const myObj = {};
const str = "myString";
const random = Math.random();
const anotherObj = {};

// create properties on myObj
myObj.type = "Dot syntax for a key named type";
// myObj["type"] = "bracket syntax for a key named type";
myObj["date created"] = "This key has a space";
myObj[str] = "This key is an already created variable called myString";
myObj[random] = "A random number is the key here";
myObj[anotherObj] = "This key is object anotherObj";
myObj[""] = "This key is an empty string";

console.log(myObj);
console.log(myObj.str); // will return undefined because it can only work with bracket notation
console.log(myObj[str]);
console.log(myObj.myString);

// enumerating properties
function showProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    if (Object.hasOwn(obj, i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}

showProps(myCar, "myCar");
// will produce
// myCar.make = Ford
// myCar.model = Mustang
// myCar.year = 1969

// deleting properties
// You can remove a non-inherited property using the delete operator.
const myObj1 = new Object();
myObj1.a = 5;
myObj1.b = 12;

console.log("a" in myObj1);
delete myObj1.a;

console.log("a" in myObj1);

/* INHERITANCE */
// All objects in JavaScript inherit from at least one other object.
// The object being inherited from is known as the prototype,
// and the inherited properties can be found in the prototype
// object of the constructor

console.log(car1.color);
Car.prototype.color = "red";
console.log(car1.color);

// END
