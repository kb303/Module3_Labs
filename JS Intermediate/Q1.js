function ucFirstLetters(phrase) {
  const words = phrase.split(" ");

  const capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}

console.log(ucFirstLetters("los angeles")); //Los Angeles
