const numbers = [1, 2, 3, 4, 6, 7];

numbers.unshift(0); //add 0 to beginning of array
numbers.splice(5, 0, 5); //add 5 at position after number "4"
numbers.splice(4, 1, "four"); //replace 4 with "four"

console.log(numbers);

//find index of num arg and replace it with word
function updateElementInArray(num, stringToUpdate) {
  let index = numbers.indexOf(num);
  if (index != -1) {
    numbers.splice(index, 1, stringToUpdate);
    console.log(numbers);
  } else {
    console.log("Number could not be found");
  }
}

updateElementInArray(2, "two");
updateElementInArray(9, "nine");
