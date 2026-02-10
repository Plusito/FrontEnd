const palabras = ["hola", "mundo"];

const convertirMayusculas = palabras.map((palabras) => {
  return palabras.charAt(0).toUpperCase() + palabras.slice(1);
});

console.log(convertirMayusculas);
