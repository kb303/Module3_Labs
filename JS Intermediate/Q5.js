let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen);

/*why is this not working?
When we use toFixed(), it converts the number to a string. So when we concatenate fixedTwenty and fixedTen, 
we are concatenating two strings instead of adding two numbers. 
*/

function currencyAddition(float1, float2) {
  let number = parseFloat(float1) + parseFloat(float2);
  return number.toFixed(2);
}

console.log(currencyAddition(twentyCents, tenCents));

function currencyOperation(float1, float2, operation, numDecimals) {
  let num1 = parseFloat(float1);
  let num2 = parseFloat(float2);
  let decimals = numDecimals > 0 && numDecimals < 10 ? numDecimals : 2;
  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return "Invalid operation";
  }
  return result.toFixed(decimals);
}

console.log(0.3 == currencyAddition(0.1, 0.2)); // true
console.log(0.3 == currencyOperation(0.1, 0.2, "+")); // true
