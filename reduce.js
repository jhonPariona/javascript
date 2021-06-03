/* -------------------------------------------------------------------------- */
/*                                   $Reduce                                  */
/* ---------------------- Para acumular muchos valores ---------------------- */
/* -------------------------------------------------------------------------- */
const carrito = [
  { name: "tv", precio: 500 },
  { name: "laptop", precio: 300 },
  { name: "celular", precio: 200 },
];

// foreach
let totalFE = 0;
carrito.forEach((element) => (totalFE += element.precio));
console.log(totalFE); /* 1000 */

// reduce: el cero es el valor inicial en el q empieza el acumulador al final se retorna el acumulador
let total = carrito.reduce(
  (acumulador, producto) => acumulador + producto.precio,
  0
);
console.log(total); /* 1000 */
