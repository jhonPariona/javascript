/* -------------------------------------------------------------------------- */
/*                                   $Every                                   */
/* ------------- retorna un booleano todos los elementos deben cumplir la condición ------------- */
/* -------------------------------------------------------------------------- */
const arrayObjects = [
  { name: "Jhon", age: 21 },
  { name: "Camila", age: 22 },
  { name: "Kevin", age: 15 },
];

const isOfAge = arrayObjects.every((element) => element.age > 18);
console.log(isOfAge); /* false */
