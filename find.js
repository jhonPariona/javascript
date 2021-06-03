/* -------------------------------------------------------------------------- */
/*                                    $Find                                   */
/* ---------- retorna solo primer elemento que cumpla la condición ---------- */
/* -------------------------------------------------------------------------- */

/* ------- filter retorna todos los que cumplan y find solo el primero ------ */

const arrayObjects = [
  { name: "Jhon", age: 21 },
  { name: "Camila", age: 22 },
  { name: "Kevin", age: 15 },
];

// foreach
let foundFE = "";
arrayObjects.forEach((element, index) => {
  if (element.name === "Camila") {
    foundFE = arrayObjects[index];
  }
});
console.log(foundFE); /* { name: "Camila", age: 22 } */

// filter
const found = arrayObjects.filter((element) => element.name === "Camila");
console.log(found); /* [{ name: "Camila", age: 22 }] */
