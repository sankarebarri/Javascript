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
