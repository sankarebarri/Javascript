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

/* RELATION WITH ARRAYS */
const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap2 = new Map(kvArray);
console.log(myMap2);
console.log(myMap2.get("key1"));

// Use Array.from() to transform a map into a 2D key-value Array
const myArr = Array.from(myMap2); // Will show you exactly the same Array as kvArray
console.log(myArr); // [ [ 'key1', 'value1' ], [ 'key2', 'value2' ] ]

// using the spread syntax
console.log([...myMap2]); // [ [ 'key1', 'value1' ], [ 'key2', 'value2' ] ]

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap2.keys())); // [ 'key1', 'key2' ]
console.log(myMap2.values());

// cloning and merging maps
const original = new Map([[1, "one"]]);
const clone = new Map(original);

console.log(clone.get(1));
console.log(original === clone); // false
console.log(clone["1"]); // undefined

const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge two maps. The last repeated key wins.
// Spread syntax essentially converts a Map to an Array
const merged = new Map([...first, ...second]);
console.log(merged);
console.log(merged.get(1)); // { 1 => 'uno', 2 => 'dos', 3 => 'three' }

// Maps can be merged with Arrays, too

const ffirst = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const ssecond = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge maps with an array. The last repeated key wins.
const mmerged = [...ffirst, ...ssecond, [1, "eins"]];
console.log(mmerged);
