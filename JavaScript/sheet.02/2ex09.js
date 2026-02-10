function palindrom(text) {
  const formated = text.replaceAll(",", "").replaceAll(" ", "").toLowerCase();
  return formated.split("").join() == formated.split("").reverse().join();
}

console.log(palindrom("revolver"));
console.log(palindrom("level"));
console.log(palindrom("A man, a plan, a canal, Panama"));
