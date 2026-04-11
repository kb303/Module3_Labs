function randomDelay() {
  return new Promise(function (resolve, reject) {
    const delay = Math.floor(Math.random() * 19 + 1) * 1000;
    if (delay % 2 !== 0) {
      reject(delay);
    } else {
      setTimeout(resolve, delay);
    }
  });
}
randomDelay()
  .then(() => console.log("There appears to have been a delay."))
  .catch((error) =>
    console.log("The delay is odd. Value of delay: " + error + "ms. "),
  );
