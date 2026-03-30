let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
// setTimeout(car.description, 200); //fails because there is no context for 'this' since it is a function reference

setTimeout(() => car.description(), 200);

let carCopy = Object.create(car);
carCopy.year = 1977;
console.log(carCopy);

//c) description would use new values since it is using 'this' as its source

const boundCarDescription = car.description.bind(car);
