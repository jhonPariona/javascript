/* -------------------------------------------------------------------------- */
/*                                   filter                                   */
/* ---- retorna un nuevo arreglo con los elementos q cumplan la condición --- */
/* -------------------------------------------------------------------------- */
const arrayObjects = [
  { name: "Jhon", age: 21 },
  { name: "Camila", age: 22 },
  { name: "Kevin", age: 15 },
];

const ofAge = arrayObjects.filter((element) => element.age > 18);
console.log(ofAge);
/* [ { name: "Jhon", age: 21 }, { name: "Camila", age: 22 }]; */

const withoutJhon = arrayObjects.filter((element) => element.name !== "Jhon");
console.log(withoutJhon);
/* [{ name: "Camila", age: 22 }, { name: "Kevin", age: 15 }]; */
