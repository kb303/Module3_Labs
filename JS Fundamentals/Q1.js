console.log("" + 1 + 0); //'10'
//1 and 0 will automatically become strings and concatenate because of '+' and "" at the start

console.log("" - 1 + 0); //'-1'
//'-1'

console.log(true + false); //1
//true is 1 and false is 0 so 1 + 0 = 1

console.log(!true); //false
//! is NOT operator so opposite of true is false

console.log(6 / "3"); //2
//"3" automatically converts to number since its being used with '/' so 6/3 = 2

console.log("2" * "3"); //6
//"2" and "3 automatically converts to number since they're being used with '*' so 2 * 3 = 6

console.log(4 + 5 + "px"); //9px
//4 and 5 act like numbers then turn into string for "px"

console.log("$" + 4 + 5); //$45
//4 and 5 will automatically become strings and concatenate because of '+' and "$" at the start

console.log("4" - 2); //2
//"4" automatically converts to number since its being used with '-' so 4-2=2

console.log("4px" - 2); //NaN

console.log(" -9 " + 5); //'-9 5'

console.log(" -9 " - 5); //-14

console.log(null + 1); //1
//null is consided

console.log(undefined + 1); //NaN

console.log(undefined == null); // true
//both have 0 as their value so it is true since '==' only compares their value

console.log(undefined === null); //false
//'===' compares both value and datatype so it is false since undefined and null dont have the same datatype

console.log(" \t \n" - 2); //-2
