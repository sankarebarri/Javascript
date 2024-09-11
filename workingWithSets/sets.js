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
