function camelCase(cssProp) {
  const words = cssProp.split("-");
  const secondWord = words[1];
  return (
    words[0] +
    (secondWord ? secondWord.charAt(0).toUpperCase() + secondWord.slice(1) : "")
  );
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display
