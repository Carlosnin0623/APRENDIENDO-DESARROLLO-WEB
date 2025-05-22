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

// Flat: Permite aplanar los arreglos y mostrarlos todos en un mismo arreglo y le quita las dimenciones

let anios = [
     [1990,1991,1992],
     [2001,2002,2003],
     [2010,2011,2015, [2020,2021,2024, [2025,2026,2027]]]
];


let plana = anios.flat();

console.log(plana); // (10) [1990, 1991, 1992, 2001, 2002, 2003, 2010, 2011, 2015, Array(4)]

// Si queremos aplanar la tercera dimencion hacemos esto


let aplanarTodo = anios.flat(3); // Con este 3 estamos aplanando la tercera dimencion tambien y saldra un array limpio

console.log(aplanarTodo); // [1990, 1991, 1992, 2001, 2002, 2003, 2010, 2011, 2015, 2020, 2021, 2024, 2025, 2026, 2027]



/* 
El método .copyWithin() en JavaScript copia una parte del array dentro del mismo array, sin cambiar su longitud.

arr.copyWithin(target, start, end)

target: índice donde empezará a pegarse la copia.

start: índice desde donde comenzará a copiar.

end (opcional): índice hasta donde copiar (no incluido).

let fechas = ["01-01-1991","02-02-1992","03-03-1993","04-04-1994","05-05-1995"];

fechas.copyWithin(0,3);

console.log(fechas);
Veamos qué hace paso a paso:

copyWithin(0, 3) significa:

Comienza a copiar desde el índice 3 ("04-04-1994")

Pega eso a partir del índice 0.

Como no hay tercer parámetro, copia hasta el final del array.

Elementos desde el índice 3 son:

["04-04-1994", "05-05-1995"]
Esos dos elementos se copian en las primeras posiciones del array:

Resultado:

["04-04-1994", "05-05-1995", "03-03-1993", "04-04-1994", "05-05-1995"]

*/

let fechas = ["01-01-1991","02-02-1992","03-03-1993","04-04-1994","05-05-1995"];

fechas.copyWithin(0,3);

console.log(fechas);

// Convertir un string en un array con Array.from(String)

let nombre = "victor";

let arryString = Array.from(nombre);

console.log(arryString); // (6) ['v', 'i', 'c', 't', 'o', 'r']


// Descructuracion de Array

let [uno,dos,tres] = [1,2,3];

console.log(uno, dos, tres);  // resultado: 1 2 3


let [actor, ...restoDeActores] = ["Robert de niro", "Robert Pattison", "Bruce Wills","Keanu Reeaves"];

console.log(actor);   // Robert de niro
console.log(restoDeActores); // (3) ['Robert Pattison', 'Bruce Wills', 'Keanu Reeaves']


// Expandir Arrays con spead Operator

let array1 = [1,2,3];
let array2 = [4,5,6];

let arrayCompleto = [...array1, ...array2];

console.log(arrayCompleto); // (6) [1, 2, 3, 4, 5, 6]


// ToString: Permite convertir de array a string

console.log(dispositivos.toString());

// split(): Permite separar los elementos y con este separador crear un array y nos permite convertir un string en un array

let frase = "Bienvenido al curso de Javascript más sencillo de entender";

let palabras = frase.split(" ");  // el elemento separador es el espacio

console.log(palabras);  // (9) ['Bienvenido', 'al', 'curso', 'de', 'Javascript', 'más', 'sencillo', 'de', 'entender']

// Pasar a seo slug: Es util cuando necesitamos crear url amigables

let slug = palabras.join("-").toLowerCase();

console.log(slug);  // bienvenido-al-curso-de-javascript-más-sencillo-de-entender