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
