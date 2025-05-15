// Funciones de texto

// alert("Hola mundo");


// Ver la longitud de un texto

let nombre = "Victor Robles WEB";

console.log(nombre.length); // Devuelve la longitud de una cadena


// Convertir a texto un numero

let numero = 1255;

console.log(typeof numero);

let numeroAtexto = numero.toString();

console.log(typeof numeroAtexto);


// Convertir un texto a Mayusculas

let web = "victorroblesweb.es";

console.log(web.toUpperCase());


// Convertir un texto a Minusculas

console.log(web.toLowerCase());


// Conseguir una letra concreta de un texto se empieza a contar desde 0

let letra = "Soy muy guay del paraguay";

console.log(letra.charAt(14));


// Comprobar si existe una letra o un frase dentro de un texto

let eslogan = "No soy el mejor programador, pero seguramente si sere el que mejor entiendas";

if(eslogan.includes("seguramente")){

    console.log("La palabra seguramente si existe en el eslogan");

}else{

    console.log("Que dicess loco!!, esa palabra no existe");
}


// Buscar la posicion de una palabra

let mensaje = "Estas aprendiendo Javascript como un autentico loco";

console.log(mensaje.indexOf("autentico")); // 37
console.log(mensaje.charAt(37)); // a



// slice: Extrae parte de un texto

let curso = "Master en Javascript";

console.log(curso.slice(0,6));