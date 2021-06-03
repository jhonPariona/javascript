/* -------------------------------------------------------------------------- */
/*                               primitive types                              */
/* -------------------------------------------------------------------------- */

/*
 * Typeof retorna un string
 */

var v;
console.log(typeof v); /* undefined */

v = "1";
console.log(typeof v); /* string */

v = 2;
console.log(typeof v); /* number */

v = true;
console.log(typeof v); /* boolean */

v = {};
console.log(typeof v); /* object */

v = Symbol();
console.log(typeof v); /* symbol */

/* -------------------------------------------------------------------------- */
/*                           curiosidades de typeof                           */
/* -------------------------------------------------------------------------- */
console.log(typeof doesntExist); /* undefined valor por defecto*/

var v = null;
console.log(typeof v); /* object */

v = function () {};
console.log(typeof v); /* function */

v = [1, 2, 3];
console.log(typeof v); /* object */

var v = 42n;
console.log(typeof v); /* bigint */

console.log(typeof NaN); /* number */
