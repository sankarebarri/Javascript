const myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
const mySet = new Set(myArray);

// Use the spread syntax to transform a set into an Array.
const myArr = [...mySet]; // Will show you exactly the same Array as myArray

// remove duplicates elements from an array
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

const noDuplicateNumbers = [...new Set(numbers)];
console.log(noDuplicateNumbers); // [2, 13, 4, 5, 6, 7, 32]

// Relation to strings
// Case sensitive (set will contain "F" and "f")
new Set("Firefox"); // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]

// Duplicate omission ("f" occurs twice in the string but set will contain only one)
new Set("firefox"); // Set(6) [ "f", "i", "r", "e", "o", "x" ]

// Use a set to ensure the uniqueness of a list of values
const array = Array.from(document.querySelectorAll(["id"])).map((e) => e.id);

const set = new Set(array);
console.asserts(set.size === array.length);
