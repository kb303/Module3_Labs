function canDrive(age) {
  return age >= 16;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.drive = canDrive(this.age);
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1);
console.log(person2);

function PersonClass(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.drive = canDrive(this.age);
}

const person3 = new PersonClass("Charlie", 35);
console.log(person3);
