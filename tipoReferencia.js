/* -------------------------------------------------------------------------- */
/*                            Referencia por valor                            */
/* -------------------------------------------------------------------------- */

// Los valores primitivos usan este tipo de referencia
var v = 5;
// al cambiar de valor v sustituira al nuevo valor y el anterior serΓ‘ eliminado por el recolector
v = 8;

/* -------------------------------------------------------------------------- */
/*                       Referencias por referencia                         */
/* -------------------------------------------------------------------------- */
// Los que no son primitivos
var o = {};
o.name = "a";
console.log("π o", o); /* {name: 'a'} */
var m = o;
console.log("π m", m); /* {name: 'a'} */

m.surname = "b";
console.log("π o", o); /* {name: 'a', surname: 'b'} */
console.log("π m", m); /* {name: 'a', surname: 'b'} */
