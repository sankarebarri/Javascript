// The Map object holds key-value pairs and remembers the original insertion order
// of the keys.

const map1 = new Map();
map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);
console.log(map1);

console.log(map1.get("a"));
console.log(map1.size);
map1.delete("b");
console.log(map1);

const contacts = new Map();
contacts.set("Jessie", { Phone: 123456789, address: "NY Zone" });
contacts.has("Jessie"); // true
contacts.get("Jessie"); // { Phone: 123456789, address: "NY Zone" }
contacts.get("Hillary"); // undefined
contacts.set("Hillary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true

/* EXAMPLES */
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with a string");
myMap.set(keyObj, "value associated with an Object");
myMap.set(keyFunc, "value associated with a function ");

console.log(myMap.size);

// getting the values
console.log(myMap.get(keyFunc));
console.log(myMap.get("a string")); // value associated with 'a string'", because keyString === 'a string'

console.log(myMap.get({})); // undefined, because keyObj !== {}
console.log(myMap.get(function () {})); // undefined, because keyFunc !== function () {}

// iterating over Map with for ... of
const myMap1 = new Map();
myMap1.set(0, "zero");
myMap1.set(1, "one");

for (const [key, value] of myMap1) {
  console.log(`${key} = ${value}`);
}

// printing just the keys
for (const key of myMap1.keys()) {
  console.log(key);
}

// printing just the values
for (const value of myMap1.values()) {
  console.log(value);
}

// using entries
for (const [k, v] of myMap1.entries()) {
  console.log(k, v);
}

// iterating over Map with forEach
myMap1.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
