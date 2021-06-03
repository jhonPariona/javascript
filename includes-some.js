/* -------------------------------------------------------------------------- */
/*                                  $Includes                                 */
/* ---------------- sirve solo con arrays retorna un booleano --------------- */
/* -------------------------------------------------------------------------- */
const arrayIncludes = [1, 2, 3, 4, 5];
const isIncluded = arrayIncludes.includes(4);
console.log(isIncluded); /* true */

/* -------------------------------------------------------------------------- */
/*                                    $Some                                   */
/* ------ funciona para arrays y arrays de objetos retorna un booleano ------ */
/* -------------------------------------------------------------------------- */
const arraySome = [1, 2, 3, 4, 5];
const isSome = arraySome.some((element) => element === 4);
console.log(isSome); /* true */

/* ---------------------------- array de objetos ---------------------------- */
const arrayObjects = [
  { name: "Jhon", age: 21 },
  { name: "Camila", age: 22 },
  { name: "Kevin", age: 15 },
];
const isSomeObject = arrayObjects.some(
  (elements) => elements.name === "Camila"
);
console.log(isSomeObject); /* true */
