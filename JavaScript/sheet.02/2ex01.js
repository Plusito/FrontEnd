const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = nums.filter(checkUnpair);

function checkUnpair(num) {
  return num % 2 === 1;
}

console.log(checkUnpair);
