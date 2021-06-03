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

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const length = data.length;
let sumEvenNumbers = 0;
let sumOddNumbers = 0;
let numOddNumbers = 0;
let averageOddNumbers = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 === 0) {
    sumEvenNumbers += data[i];
    continue;
  }
  numOddNumbers++;
  sumOddNumbers += data[i];
}

averageOddNumbers = sumOddNumbers / numOddNumbers;

console.log(
  `La suma de pares es ${sumEvenNumbers} y el promedio de impares es: ${averageOddNumbers}`
);
