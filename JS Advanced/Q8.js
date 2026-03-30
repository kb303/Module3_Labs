function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join(", ")}`;
}

function validateStringArg(func) {
  return function (...arg) {
    if (!arg.every((item) => typeof item === "string")) {
      throw new Error("Argument must be a string");
    }

    return func(arg);
  };
}
// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);
console.log(validatedOrderItem("Apple Watch", "Samsung Galaxy")); // should run the function

try {
  console.log(validatedOrderItem(123)); // should throw an error
} catch (error) {
  console.log("Error:", error.message);
}
