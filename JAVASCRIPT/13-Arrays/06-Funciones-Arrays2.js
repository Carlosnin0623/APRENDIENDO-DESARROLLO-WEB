/*

sort(): Permite organizar los elementos de un array alphabeticamente


*/

let dispositivos = ["pc","laptop","tablet","movil","smartwatch"];
let numeros = [1,2,3,4,5,6];


dispositivos.sort();

console.log(dispositivos);


/* Reverse(): Permite invertir el orden de los elementos dentro de un array */

dispositivos.reverse();

console.log(dispositivos);


// Contact: Este metodo permite combinar arrays

let union = dispositivos.concat(numeros);

console.log(union);


// Join: Este metodo permite convertir un array en un texto y usar un seperador para separarlos

let etiquetas = dispositivos.join(",");

console.log(etiquetas);



// slice: Retorna una copia de una parte de los elementos de un array, desde donde empieza hasta donde termine el rango

let misdispositivosFavs = dispositivos.slice(3,5);

console.log(misdispositivosFavs);


// Find: Este metodo busca un valor y devuelve el primer elemento que cumpla la condicion en este caso que su longitud sea mayor a 5

let buscar = dispositivos.find((dispositivo) => {
     return dispositivo.length > 5;
});

console.log(buscar);


// FindIndex: Este metodo  busca un valor y devuelve el indice del primer elemento que cumpla con la condicion 

let buscarIndice = dispositivos.findIndex(dispositivo => dispositivo.length > 7);


console.log(buscarIndice);