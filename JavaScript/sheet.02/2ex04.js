function summa(array) {
  let result = 0;

  array.forEach((element) => {
    result += element;
  });

  return result;
}

const test = [1, 2, 3, 4, 5, 6];

console.log(summa(test));
