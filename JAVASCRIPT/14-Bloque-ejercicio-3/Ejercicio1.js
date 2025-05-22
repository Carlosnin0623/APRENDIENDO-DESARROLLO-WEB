/*

Ejercicio 1:


Crea un array con 10 números aleatorios del 1 al 100.
Luego, pide al usuario que adivine un número.


Si acierta, muestra un mensaje de celebración;
si no, muestra el número correcto


*/

let numeros = [11,23,28,49,51,82,1,5,7,99];

// Generar los numeros de forma dinamica
// let numeroDos = Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1);

let elige = prompt("Adivina el número del 1 al 100");

// Con Number podemos convertir un string en un numero

if(numeros.includes(Number(elige))){
   alert("ENHORABUENA MACHO! has adivinado el número");
}else{
    alert("Que mala suerte! no has acertado")
}