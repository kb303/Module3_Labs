const animals = ["Tiger", "Giraffe"];

animals.push("Elephant", "Zebra");
animals.unshift("Cat", "Dog");

animals.sort((animal1, animal2) => (animal1 > animal2 ? 1 : -1));

console.log(animals);

function replaceMiddleAnimal(newValue) {
  animals.splice(Math.floor(animals.length / 2), 1, newValue);
}

replaceMiddleAnimal("Bird");
console.log(animals);

function findMatchingAnimals(beginsWith) {
  const newAnimals = animals.filter((animal) => animal.startsWith(beginsWith));
  return newAnimals;
}

console.log(findMatchingAnimals("Z"));
