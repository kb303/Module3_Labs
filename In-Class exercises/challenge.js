const sentence = "The quick brown fox jumps over the lazy dog.";

const arr = sentence.split(" ");

const four = arr.filter((word) => word.length >= 4);

console.log(four);
