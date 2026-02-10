function cadena(text) {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result = result + text.charAt(i);
  }
  return result;
}

let texto = "artem";
console.log(cadena(texto));
