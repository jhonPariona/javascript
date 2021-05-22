// Es un tipo especial de objeto que tiene incorporado métodos útiles
const analiza = "dinamicKey";
var a = [];

a.stringKey = "value";
console.log("a: ", a); /* [stringKey: 'value'] */

a[analiza] = "b";
console.log("a: ", a); /* [stringKey: 'value', dinamicKey: 'b'] */
