/*

Ejercicio 3:


Tengo un Kanguro que salta 3 metros cada vez.


Haz un programa que me diga cuantos saltos ha dado el kanguro.


Y cual es la distancia total recorrida tras 17 saltos

*/

let DistanciaSaltos = 3;
let total = 0;
let saltos = 17;


for(let i = 1; i <= saltos; i++){
    total += DistanciaSaltos;
}

console.log(`La cantidad de metros recorrido por el kanguro en ${saltos} saltos es ${total}km `);




