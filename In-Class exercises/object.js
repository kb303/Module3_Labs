const newObject = {};

const person = {
  firstname: "Kirsten",
  "has a dog": false, //dont use string as key (you can but it is bad practice)
  age: 27,
};

person.firstname;
person["has a dog"];

person.age = 26; //change value of key

person.location = "Sydney"; //create key "location" and assign value "Sydney"

//keys must be unique - if there are two same keys, the last key will only be kept
//all keys are changed to strings so "2" and 2 are considered the same

for (let key in person) {
  console.log("key: " + key + " and value: " + person[key]);
} //iterating over object

//copy object to another object
const woman = { ...person };

//create new object by copy another object and update key value at same time
const man = { ...person, firstname: "Ashley" };

//create new object by copy another object and add new key value at same time
const child = { ...person, lastname: "Brown" };
