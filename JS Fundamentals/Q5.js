function getGreeting(name) {
  return "Hello " + name + "!";
}

const greeting = function (name) {
  return "Hello " + name + "!";
};

const greet = (firstname) => "Hello " + firstname + "!";

console.log(greeting("Kirsten"));

console.log(greet("Kirsten"));
