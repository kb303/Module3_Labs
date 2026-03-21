function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}

setTimeout(delayMsg, 100, "#1: Delayed by 100ms"); // print 4th
setTimeout(delayMsg, 20, "#2: Delayed by 20ms"); //print 3rd
setTimeout(delayMsg, 0, "#3: Delayed by 0ms"); //print 2nd
delayMsg("#4: Not delayed at all"); //print 1st

const delay = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);

const test = setTimeout(delay, 11000, "Delay using arrow function");

clearTimeout(test);
