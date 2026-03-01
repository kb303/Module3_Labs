const teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
const cat1 = { name: "Fluffy", breed: "Siberian" };

const moreSports = [...teamSports];
moreSports.push("Basketball");
moreSports.unshift("Football");

let dog2 = dog1;
dog2 = "Rover";

const cat2 = { ...cat1 };
cat2.name = "Whiskers";

console.log(
  "teamSports:",
  teamSports,
  "\nmoreSports:",
  moreSports,
  "\ndog1:",
  dog1,
);
