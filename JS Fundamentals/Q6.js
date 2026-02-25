const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.catchPhrase(person));
  },
  //   getCatchPhrase(person) {
  //     if (person.numFingers == 6) {
  //       return "You killed my father. Prepare to die.";
  //     } else {
  //       return "Nice to meet you.";
  //     }
  //   },

  catchPhrase: (person) => {
    if (person.numFingers == 6) {
      return "You killed my father. Prepare to die.";
    } else {
      return "Nice to meet you.";
    }
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);
