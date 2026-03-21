const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

let minutesPassed = today.getMinutes() + today.getHours() * 60;
console.log(minutesPassed + " minutes have passed so far today");

let secondsPassed = today.getSeconds() + today.getHours() * 3600;
console.log(secondsPassed + " seconds have passed so far today");

const birthDate = new Date("1999-03-30");
const ageInMilliseconds = today.getTime() - birthDate.getTime();
const ageDate = new Date(ageInMilliseconds);
const years = ageDate.getUTCFullYear() - 1970;
const months = ageDate.getUTCMonth();
const days = ageDate.getUTCDate() - 1; // Subtract 1 because getUTCDate() returns the day of the month starting from 1
console.log(`I am ${years} years, ${months} months and ${days} days old`);
