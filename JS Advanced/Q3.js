function printMe(msg) {
  console.log(msg);
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
printMe = debounce(printMe, 1000); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(printMe, 100, "Debounced message");
setTimeout(printMe, 200, "Debounced message");
setTimeout(printMe, 300, "Debounced message");
