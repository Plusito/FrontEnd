function remove(array) {
  const numbers = new Set();
  array.forEach((element) => {
    numbers.add(element);
  });
  return numbers;
}

const massive = [1, 2, 3, 4, 5, 2, 3, 2, 2, 2, 3];
console.log(remove(massive));
