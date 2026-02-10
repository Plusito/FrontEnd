let cero = 0;
let positive = 32;
let = negative = -14;

verificarNumer(cero);
verificarNumer(positive);
verificarNumer(negative);

function verificarNumer(number) {
  if (number > 0) {
    console.log(`numero ${number} es positivo`);
  } else if (number < 0) {
    console.log(`numero ${number} es negativo`);
  } else {
    console.log(`numero ${number} es cero`);
  }
}
