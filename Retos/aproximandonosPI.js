/*
Reto 2: Ciclos
Aproximándonos a PI
Se puede aproximar el valor de π mediante la siguiente serie:

π= 4/1 – 4/3 + 4/5 – 4/7 + 4/9 . . .

La diferencia entre la serie y π debe ser menor a 0.0005. Determina el número de términos que se requieren para obtener esta precisión.

Datos: Denominador, Contador, Bandera, Resultado.
Donde:
Denominador: Variable de tipo numérica que incrementa en dos unidades con cada ciclo. Comienza en 1.
Contador: Variable de tipo numérica que almacena el conteo de términos utilizados en la serie.
Bandera: Variable de tipo booleana utilizada para decidir si suma o si se resta en la serie.
Resultado: Variable de tipo numérica que almacena el resultado de la serie.

Considerar el valor de π= 3.1415
*/

let denominador = 1;
let contador = 0;
let bandera = true;
let resultado = 0.0;
const PI = 3.1415;

let diferencia = 0;

do {
  if (bandera) {
    resultado += 4 / denominador;
  } else {
    resultado -= 4 / denominador;
  }
  bandera = !bandera;
  denominador += 2;
  contador++;
  resultado = parseFloat(resultado.toFixed(4));
  diferencia = parseFloat(Math.abs(resultado - PI).toFixed(4));
} while (diferencia > 0.0005);

console.log(`la cantidad de veces a iterar es ${contador}`);
