/*
 * Debemos pensar en NaN como número inválido(no como no es un numero)
 * No tiene la propiedad de identidad NaN === NaN (Es el único valor que no es igual a si mismo)
 * Especificación IEEE 754
 */

console.log(typeof NaN); /* number */

var v = Number("n/a");
console.log(v); /* NaN */

/* false por que la IEEE concensó que un NaN no es igual a otro NaN */
console.log(v === v);

/* true isNaN convierte primero a un numero y de ahi comprueba si es NaN */
console.log(isNaN("Hello"));

console.log(isNaN(v)); /* true */

/* false ya que no hace la conversion antes de comprobar es6 */
console.log(Number.isNaN("hello"));

console.log(Number.isNaN(v)); /* true */
