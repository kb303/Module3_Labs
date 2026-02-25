const hello = function () {
  console.log("Hello, world!");
}; //cant call function before its declaration because its a function expression and not a function declaration

function sayHello(name) {
  console.log("Hello, world!");
  console.log(arguments); //arguments is an array-like object that contains the arguments passed to the function
} //can call function before its declaration

const anotherHello = () => console.log("Hello World"); //short way to write a function expression using arrow function syntax

const sayHello2 = (/*parameters here*/) => {
  console.log("Hello, world!");
}; //short way to write a function expression using arrow function syntax
//short way doesnt have arguments object and cant be used as a constructor function

console.log(hello);

sayHello("Hello");

sayHello2();
