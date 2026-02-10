function saludar(name) {
  console.log(`Hola ${name}`);
}

function mayor(a, b) {
  if (a > b) {
    console.log(`El numero ${a} es mayor`);
  } else if (b > a) {
    console.log(`El numero ${b} es mayor`);
  } else {
    console.log(`Los numeros ${a} y ${b} son iguales`);
  }
}

saludar("Artem");

mayor(3, 3);
mayor(4546, 546);
