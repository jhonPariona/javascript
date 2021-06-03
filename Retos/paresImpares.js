/*
Reto 1: Ciclos
Pares e Impares
Escribe un programa que, al recibir un listado de números enteros positivos, obtenga la suma de los números pares y el promedio de los números impares.

Datos: Listado, Longitud, SumaPar, SumaImpar, Contador.
Donde:
Listado: Array de números enteros positivos
Longitud: Variable de tipo numérico que expresa el número de elementos en el listado
SumaPar , SumaImpar: Variables de tipo numérico donde se almacenará la suma de los números pares e impares respectivamente.
Contador: Variable de tipo entero que se usará para contabilizar los números impares.
*/

const listado = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const longitud = listado.length;
let sumaPar = 0;
let sumaImpar = 0;
let contador = 0;
let promedioImpares = 0;

for (let i = 0; i < longitud; i++) {
  if (listado[i] % 2 === 0) {
    sumaPar += listado[i];
    continue;
  }
  contador++;
  sumaImpar += listado[i];
}

promedioImpares = sumaImpar / contador;

console.log(
  `La suma de pares es ${sumaPar} y el promedio de impares es: ${promedioImpares}`
);
