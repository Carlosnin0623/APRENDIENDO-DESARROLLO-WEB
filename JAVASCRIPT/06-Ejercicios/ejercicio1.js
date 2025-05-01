/*

Ejercicio 1:

Calcula cuantas horas le llevaria llegar a la luna a una nave espacial y
guarda el resultado en una variable.



La distancia desde la tierra hasta la luna es de 384.400 kilometros


la velocidad de la nave es de 1225 kilometros por hora

*/

let velocidadNave = 1225;
const distanciaLuna = 384400;


let Hora = Math.round(distanciaLuna / velocidadNave);

console.log("Las horas necesarias para llegar a la luna con esta nave es: " + Hora);