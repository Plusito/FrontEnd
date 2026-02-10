function largestWord(words) {
  return words.reduce((large, actual) => {
    return actual.length > large.length ? actual : large;
  }, "");
}

const array = ["hola", "mundo", "javascript", "programación"];
console.log(largestWord(array));
