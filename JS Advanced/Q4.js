function printFibonacci() {
  let num1 = 1;
  let num2 = 1;

  let timer = setInterval(() => {
    if ((num1 === 1, num2 === 1)) {
      console.log(num1);
      console.log(num2);
    }
    let sum = parseInt(num1) + parseInt(num2);
    num1 = num2;
    num2 = sum;
    console.log(num2);
  }, 1000);
  setTimeout(() => clearInterval(timer), 10 * 1000);
}

printFibonacci();

function printFibonacciTimeouts() {
  let num1 = 1;
  let num2 = 1;
  let counter = 1;

  console.log(num1);
  console.log(num2);

  setTimeout(
    function repeat(current = 0) {
      let sum = parseInt(num1) + parseInt(num2);
      num1 = num2;
      num2 = sum;
      console.log(num2);

      if (current < 10) setTimeout(repeat, 1000, current++);
    },
    1000,
    counter,
  );
}

printFibonacciTimeouts();
