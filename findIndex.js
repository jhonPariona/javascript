/* -------------------------------------------------------------------------- */
/*                                 $FindIndex                                 */
/* retorna el índice en el q está el elemento(solo el primero que coincida) si no lo encuentra retorna -1 */
/* -------------------------------------------------------------------------- */

/* ------------------------ En un arreglo de indices ------------------------ */
const array = [1, 2, 3, 4, 5];

// foreach
array.forEach((element, index) => {
  if (element === 3) {
    console.log(
      `EL elemento 3 está en el índice: ${index}`
    ); /* EL elemento 3 está en el índice: 2 */
  }
});

// findIndex
const isFindArray = array.findIndex((element) => element === 3);
console.log(isFindArray); /* 2 */

/* ------------------------ En un arreglo de objetos ------------------------ */
const arrayObjects = [
  { name: "Jhon", age: 21 },
  { name: "Camila", age: 22 },
  { name: "Kevin", age: 15 },
];
const isFindInObject = arrayObjects.findIndex(
  (element) => element.name === "Jhon"
);
console.log(isFindInObject); /* 0 */
