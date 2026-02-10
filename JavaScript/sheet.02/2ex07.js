function vocals(text) {
  const letters = text.split("");
  const vocales = "aeiou";
  let count = 0;
  letters.forEach((element) => {
    if (vocales.includes(element)) {
      count += 1;
    }
  });
  return count;
}

console.log(vocals("Hello World"));
