if (0) console.log("#1 zero is true"); //wont print since 0 as a number is false
if ("0") console.log("#2 zero is true"); //will print as a non-empty string is equal to true
if (null) console.log("null is true"); //wont print since null is equal to false
if (-1) console.log("negative is true"); //will print since all numbers (negative and positive) are equal to true unless it is 0
if (1) console.log("positive is true"); //will print since number is not 0
