const arr1 = [1, 2],
  arr2 = [3, 4],
  arr3 = [5, 6];

const arrTotal = [10, ...arr3, ...arr1, ...arr2];
console.log(arrTotal); /* [10, 5, 6, 1, 2, 3, 4] */
