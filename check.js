let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9],
  [10, 11, 12],
];

function minOfNested(arr) {
  let sum = 0;
  arr.forEach((x) => {
    let minValue = x.reduce((acc, curr) => {
      if (curr < acc) {
        acc = curr;
      }
      return acc;
    });
    sum += minValue;
  });
  return sum;
}

console.log(minOfNested(arr));
