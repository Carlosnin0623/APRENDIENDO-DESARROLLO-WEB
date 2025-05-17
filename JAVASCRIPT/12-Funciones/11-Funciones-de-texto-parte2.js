// Buscar la posicion de una palabra

let mensaje = "Estas aprendiendo Javascript como un autentico loco";

console.log(mensaje.indexOf("autentico")); // 37
console.log(mensaje.charAt(37)); // a



// slice: Extrae parte de un texto

let curso = "Master en Javascript";

console.log(curso.slice(0,6));  // Master

console.log(curso.indexOf("Javascript")); // Poscion 10

// Si pongo un solo parametro dentro del metodo slice me retornara todo lo que esta despues de ese indice
// Pero si usamos 2 parametros es para indicarle un inicio y un fin y que no tome todo el texto.

console.log(curso.slice(10)); // Javascript


// Replace: Remplazar parte de un texto, pero solo reemplaza la primera concurrencia

let pelicula = "Dos tontos muy tontos";

console.log(
   pelicula.replace("tontos", "listos")

);


// replaceAll permite eemplazar todos los textos que sean iguales dentro de un texto

console.log(
   pelicula.replaceAll("tontos", "listos")

);


// Trim: Elimina los espacios en blanco al inicio y al final de una cadena de texto

let email = "  victor@victor.com        ";

console.log(
    email.trim()
);

// Split: Permite seperar cadena por partes y crea un array con cada uno de los elementos

let listaCompra = "huevos,hamburguesas,platanos,lechuga,tomate,yogures";

let listaArray = listaCompra.split(",");


console.log(listaArray);

