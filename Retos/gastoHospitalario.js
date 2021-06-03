/*
Reto 2: Condicionales
Gasto hospitalario
En un hospital de la Ciudad de México se creó un esquema para determinar los gastos médicos que un paciente tendrá que pagar por concepto de servicio hospitalario solicitado.
Crea un programa que permita calcular el costo de internación de un cliente según los datos en la siguiente tabla.
Tratamiento	Costo por persona por día
1	2800
2	1950
3	2500
4	1150
El hospital tiene la política de otorgar un descuento del 25% sobre el total de los gastos a los pacientes mayores de 60 años y a los clientes menores de 25 años se les otorga un 15% de descuento.
Datos: Tratamiento, Edad, Tiempo y Costo
Donde:
Tratamiento: Variable de tipo numérico que representa el identificador del tratamiento.
Edad: Variable de tipo numérico que representa la edad del cliente.
Tiempo: Variable de tipo numérico que representa los días que estará hospitalizado.
Costo: Variable de tipo numérica que representa el costo total que pagará el paciente.
*/

const costoTratamiento = [2800, 1950, 2500, 1150];
const tratamiento = 3;
const edad = 25;
const tiempo = 1;
let costo = 0;

costo = costoTratamiento[tratamiento - 1] * tiempo;
console.log("🚀 costo", costo);

if (edad > 60) {
  costo -= costo * 0.25;
  console.log("🚀 mayor costo", costo);
} else if (edad < 25) {
  costo -= costo * 0.15;
  console.log("🚀menor~ costo", costo);
}

console.log(`EL costo de internación es: ${costo}`);
