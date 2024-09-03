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
