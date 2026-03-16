function makeCounter(startsFrom, incrementBy) {
  let currentCount = parseInt(startsFrom);
  return function () {
    currentCount += parseInt(incrementBy);
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter(5, 3);
counter1(); // 1
counter1(); // 2

let counter2 = makeCounter(2, 2);

counter2();
