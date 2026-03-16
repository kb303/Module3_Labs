// Create a new array with unique fruit names (case-insensitive)
const fruits = ["Apple", "banana", "orange", "aPPle", "Banana", "ORANGE"];

const uniqueFruits = [...new Set(fruits.map((fruit) => fruit.toLowerCase()))];

console.log(uniqueFruits.length);

//extract values from an array into variables
const colors = ["red", "green", "blue", "yellow"];
const [firstColor, secondColor, thirdColor, fourthColor] = colors;
console.log(firstColor); // red
console.log(secondColor); // green
console.log(thirdColor); // blue
console.log(fourthColor); // yellow

//write a function to consume destructured student object and return a string with the student's name and age
const student = {
  name: "John Doe",
  age: 20,
  grade: "A",
};
function getStudentInfo({ name, age, grade }) {
  return `Student Name: ${name}, Age: ${age}, Grade: ${grade}`;
}
console.log(getStudentInfo(student));
