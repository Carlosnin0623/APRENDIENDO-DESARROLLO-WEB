/* SOME: Se usa para hacer una busqueda dentro de los arreglos para ver si uno de los elementos incluye algo 
Si es asi retorna true, de lo contrario retorna false

*/

let dispositivos = ["pc","laptop","tablet","movil","smartwatch"];


let letrasE = dispositivos.some((dispositivo) => {
     return dispositivo.includes("e");
});

console.log(letrasE);


// Every: Busca si todos los elementos cumplen la condicion con que 1 no cumpla devuelve false, si todos cumplen devuelve true //

let letraA = dispositivos.every(dispositivo => dispositivo.includes("a"));

console.log(letraA);