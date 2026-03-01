let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four; //"34"
let multiplication = three * four; //12
let division = three / four; //0.75
let subtraction = three - four; //-1
let lessThan1 = three < four; //true because when comparing strings, it compares the first character of each string and since "3" is less than "4", it returns true
let lessThan2 = thirty < four; //true because when comparing strings, it compares the first character of each string and since "3" is less than "4", it returns true even though 30 is greater than 4 as numbers

console.log("Addition: " + addition);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);
console.log("Subtraction: " + subtraction);
console.log("Is three less than four? " + lessThan1);
console.log("Is thirty less than four? " + lessThan2);
