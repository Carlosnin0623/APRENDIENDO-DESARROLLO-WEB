// Buscar texto en una cadena


let miCadena = "Pablito clavó un clavito clavó";

// Search: Sirve para buscar texto en una cadena y nos retorna su posicion si existe

console.log(
    miCadena.search("clavó")
);

// Match: 

console.log(
    miCadena.match("clavó") // Devuelve un array completo,  que muestra mas informacion
);

// Si queremos buscar todas las concurrencias de un texto usamos expresiones regulares
// con / ponemos en medio lo que queremos buscar/ y con g hacemos que la busqueda sea global

console.log(
    miCadena.match(/clavó/g) // ['clavó', 'clavó'];
);