// create a new set
const letters = new Set(["a", "b", "c"]);
console.log(letters);

// .add(), delete(), .has(), .size, .clear(), .values()
const newLetters = new Set();
newLetters.add("y");
newLetters.add(5);
console.log(newLetters);

newLetters.delete("y");
console.log(newLetters);

console.log(newLetters.has("y"));

console.log(newLetters.size);
console.log(newLetters.values());

newLetters.clear();
console.log(newLetters);

/* EXAMPLES */
// Using The Set Objects
const mySet1 = new Set();
mySet1.add(1);
mySet1.add(5); // Set(2) {1, 5}
mySet1.add(5); // Set(2) {1, 5}
mySet1.add("some text");

const o = { a: 1, b: 2 };
mySet1.add(o); // Set(4) {1, 5, "Some text", {a: 1: b: 2}}

// o is referencing a different object, so this is okay
// Set(5) { 1, 5, 'Some text', { a: 1, b: 2 }, { a: 1, b: 2 } }
mySet1.add({ a: 1, b: 2 });
console.log(mySet1);

console.log(mySet1.has(1)); // true
console.log(mySet1.has(100)); // false
console.log(mySet1.has(Math.sqrt(25))); // true
console.log(mySet1.has("Some Text".toLowerCase())); // true

console.log(mySet1.size); // 5

// Iterating Sets
console.log("Iterating Sets");
for (const item of mySet1) {
  console.log(item);
}

console.log("Iterating Keys");
for (const item of mySet1.keys()) {
  console.log(item);
}

console.log("Iterating Values");
for (const item of mySet1.values()) {
  console.log(item);
}

console.log("Iterating Key and value by entries");
for (const [key, value] of mySet1.entries()) {
  console.log(key, value);
}

//Converting Set object to an array object, with Array.from()
console.log("//Converting Set object to an array object, with Array.from()");
const myArr = Array.from(mySet1);
console.log(myArr);

// the following will also work if run in an HTML document
// mySet1.add(document.body);
// mySet1.has(document.querySelector("body"));

// Converting between Set and Array
console.log("mySet2");
const mySet2 = new Set([1, 2, 3, 4]);
const myArr2 = [...mySet2];
console.log(myArr2);

console.log("filtering -- intersection");
const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));
console.log(intersection);

console.log("filtering -- difference");
const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));
console.log(difference);

// iterate with forEach
mySet2.forEach((value) => console.log(value));
