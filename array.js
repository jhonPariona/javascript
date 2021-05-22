// Es un tipo especial de objeto que tiene incorporado métodos útiles
const analiza = "dinamicKey";
var a = [];

a.stringKey = "value";
console.log("a: ", a); /* [stringKey: 'value'] */

a[analiza] = "b";
console.log("a: ", a); /* [stringKey: 'value', dinamicKey: 'b'] */

/* -------------------------------------------------------------------------- */
/*                                   length                                   */
/* -------------------------------------------------------------------------- */
// Se incrementa al agregar indices numericos y no con las propiedades

var l = [];

l.push("1");
console.log(l); /* ['1'] */
console.log(l.length); /* 1 */

l.stringKey = "a";
console.log(l); /* ['1', stringKey: 'a'] */
console.log(l.length); /* 1 */

l[10] = "10";
console.log(l); /* ['1', , , , , , , , , , 10, stringKey: 'a'] */
console.log(l.length); /* 11 */
