/* -------------------------------------------------------------------------- */
/*                                   $Concat                                  */
/* --------------------------- une varios arreglos -------------------------- */
/* -------------------------------------------------------------------------- */

const arr1 = [1, 2],
  arr2 = [3, 4],
  arr3 = [5, 6];

const arrTotal = arr2.concat(arr1, 10, arr3);
console.log(arrTotal); /* [3,4,12,10,5,6] */
