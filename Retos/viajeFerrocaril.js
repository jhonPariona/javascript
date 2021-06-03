/*
Reto 1: Condicionales
Viaje en ferrocarril
Se requiere calcular el precio de ida y vuelta en ferrocarril, conociendo tanto la distancia entre las dos ciudades como el tiempo de estancia en la ciudad destino.
Si el número de días de estancia es superior a 10 y la distancia total (ida y vuelta) a recorrer es superior a 500k, el precio del billete se reduce en 20%. El precio por km es de $0.19.

Datos: Distancia, Tiempo y Costo
Donde:
Distancia: Variable de tipo numérico que expresa la distancia entre las dos ciudades en km
Tiempo: Variable de tipo numérico que expresa el tiempo de estancia en días.
Costo: Variable de tipo numérico que expresa el monto a pagar por el viaje
*/

const distancia = 300;
const tiempo = 15;
let costo = 0;
const precio = 0.19;

const distanciaTotal = distancia * 2;
costo = distanciaTotal * precio;

if (tiempo > 10 && distanciaTotal > 500) {
  costo -= costo * 0.2;
}

console.log(`El costo total del viaje es: ${costo}`);
