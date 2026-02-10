let massive1 = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

let massive2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function suma(test) {
  let result = 0;
  for (let i = 0; i < test.length; i++) {
    result += test[i];
  }
  console.log(`La suma de todo es ${result}`);
}

for (let i = 0; i < massive1.length; i++) {
  console.log(massive1[i]);
}

suma(massive2);
