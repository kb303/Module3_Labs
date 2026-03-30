Function.prototype.delay = function (ms) {
  const original = this;
  return function (...args) {
    setTimeout(() => original.apply(this, args), ms);
  };
};

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}
multiply.delay(500)(5, 5, 8, 7); // prints 25 after 500 milliseconds
