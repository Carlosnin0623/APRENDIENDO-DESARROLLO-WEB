
let frase = "Hola soy Carlos"; // String o cadena
let anio = 2027; // Numero entero / int
let interes = 2.7; // Numero decimal / float / double
let mayorEdad = true;  // Booleano
let vacia;     // undefined / indefinido cuando la variable no ha sido inicializada
let nula = null;      // cuando el dato es nulo


let frutas = ["Fresa", "Sandia", "Naranja"];  // Arrays o Arreglos

let heroe = {                  // Objeto
    nombre: "Batman",
    universo: "DC"
}

// Como identificar el tipo de dato de una variable //

console.log(typeof(frase)); // string
console.log(typeof(anio)); // integer
console.log(typeof(interes)); // float
console.log(typeof(mayorEdad)); // Bool
console.log(typeof(vacia)); // undefined
console.log(typeof(nula)); // Objeto
console.log(typeof(frutas)); // Objeto
console.log(Array.isArray(frutas)); // true
console.log(typeof(heroe)); // Objeto
