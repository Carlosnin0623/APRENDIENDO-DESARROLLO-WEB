// Operadores Aritmeticos (matematicos)

let numero1 = 44;
let numero2 = 12;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;  /* Es es numero */
let resto = numero1 % numero2; // El resto es el resultado final de la division
let potencia = numero1 ** 2;

console.log("La suma es:", suma);
console.log("La resta es:", resta);
console.log("La multiplicación es:", multiplicacion);
console.log("La división es:", division);
console.log("El resto es:", resto);
console.log("La potencia de " + numero1 + " es " + potencia);

// Asignacion
let numerito = 17;

// Adicion
numerito += 3;

numerito *= 2;

console.log(numerito);

// Comparacion

let numerazo = 20;

console.log(numerazo == "20"); // true

// Comparador estricto ===

console.log(numerazo === "20"); // false


// Comparador distinto != 

console.log(numerazo != 33); // true

console.log(numerazo != "20"); // false

console.log(numerazo !== "20"); // true

// Comparador mayor que > 

console.log(numerazo > 50); // false

// Comparador menor que <

console.log(numerazo < 55); // true

// Comparador mayor o igual que > 

console.log(numerazo >= 50); // false

// Comparador menor o igual que > 

console.log(numerazo <= 50); // true

// Logicos


let esMayorDeEdad = true;
let tieneEntrada = true;

console.log(esMayorDeEdad && tieneEntrada); // && Solo es True si ambos enunciados son verdaderos


console.log(esMayorDeEdad || tieneEntrada);  // || es True si almenos 1 de sus enunciados son verdaderos


// ! Negacion de un expresion == No

console.log(!esMayorDeEdad);  // false

// Cadena


let mensaje1 = "hola";
let mensaje2 = "que tal?";

let mensaje_total = mensaje1 + " " + mensaje2;


mensaje_total += " Soy Victor Robles WEB";

console.log(mensaje_total);

// Incremento 

let cifra = 1200;

cifra++;
cifra++;
cifra++;
cifra++;

console.log(cifra);


// Decremento
cifra--;
console.log(cifra);