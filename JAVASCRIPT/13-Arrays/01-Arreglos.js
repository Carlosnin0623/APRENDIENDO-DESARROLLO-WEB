/*  Arrays, matrices, arreglos */


let nombre = "Victor Robles";

let nombres = ["Víctor Robles", "Juan", "Pepe", "Manolillo","José"];

//                 0              1        2       3         4

console.log(nombres);

// Sacar la longitud de un arreglos

console.log(nombres.length);


let peliculas = new Array("Iron Man", "Gran Torino", "Mamma mia");


console.log(peliculas);
console.log(peliculas.length);


// Acceder a los elementos de un array 

console.log(nombres[3]); // Manolillo

console.log(nombres[0]); // Víctor Robles



// Modificar elementos array

nombres[3] = "Manuel";
nombres[0] = "Victor Manuel";

console.log(nombres);



// PRACTICAR CON ARREGLOS  


let elemento = parseInt(prompt("Que usuario quieres?", 0));

if(elemento >= nombres.length){
    alert("Upss ese usuario en concreto no existe busca otro");
}else{
    alert(`Bien el usuario ${nombres[elemento]} fue encontrado`);
}

