function find(array) {
  let maxNum = 0;
  array.forEach((element) => {
    if (element > maxNum) {
      maxNum = element;
    }
  });
  return maxNum;
}

const num = [325, 46, 563434, 45, 6, 3424];

console.log(find(num));
