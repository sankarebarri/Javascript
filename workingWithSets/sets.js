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
