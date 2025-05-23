/* 

Ejercicio 4:

Crea un array de personajes y clasificalos
en grupos (heroes, villanos, etc).

Muestra un mensaje para cada grupo.

*/


const personaje = [
    "V:Joker",
    "H:Batman",
    "V:Duende Verde",
    "H:Spiderman",
    "V:Voldemor",
    "H:Harry Pother",
    "H:Frodo",
    "V:Sauron"
];

let heroes  = personaje.filter(elementos => elementos.startsWith("H:"));
let villanos = personaje.filter(elementos => elementos.startsWith("V:"));
let heroesV = heroes.map(elementos => elementos.slice(2));
let villanosV = villanos.map(elementos => elementos.slice(2));

console.log("Heroes:");
heroesV.forEach(heroe => {
    console.log(heroe);
});

console.log("Villanos:");
villanosV.forEach(villano => {
    console.log(villano);
});





