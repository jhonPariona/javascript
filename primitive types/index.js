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
console.log(typeof doesntExist); /* undefined */
var v = null;
console.log(
  typeof v
); /* object => es un error pero no se puede cambiar en la especificacion de es */

v = function () {};
console.log(typeof v); /* function */

v = [1, 2, 3];
console.log(
  typeof v
); /* object al igual que null no se puede cambiar en la es es un error pero debemos aprender a trabajar con ello */

var v = 42n;
console.log(typeof v); /* bigint */
