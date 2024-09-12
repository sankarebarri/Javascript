// Return a new array with the square root of all element values:
const numbers = [4, 9, 16, 25];

const squareRoot = numbers.map((number) => {
  Math.sqrt(number);
});
console.log(squareRoot); // [ undefined, undefined, undefined, undefined ]

const squareRoot1 = numbers.map(
  (number) => number * 6
  //   return Math.sqrt(number);
);

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
console.log(squareRoot1); // [ 2, 3, 4, 5 ]
const myNewArr = numbers.map(Math.sqrt);
console.log(myNewArr); // [ 2, 3, 4, 5 ]

// Multiply all the values in an array with 10:
const numbers1 = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);
function myFunction(n) {
  return n * 10;
}
console.log(newArr);

// Get the full name for each person:
const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

const getFullName = (object) => {
  console.log(object.firstname, object.lastname);
};

persons.map(getFullName);

const getFullNameArray = (item) => {
  return [item.firstname, item.lastname].join(" ");
};

const fullname = persons.map(getFullNameArray);
console.log(fullname);
