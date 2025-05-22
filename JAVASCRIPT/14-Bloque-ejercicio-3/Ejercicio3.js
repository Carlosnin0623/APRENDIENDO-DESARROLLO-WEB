/*  

Ejercicio 3:


Dado un array de palabras, cuenta cuentas letras tienen cada lapabra
y crea un nuevo array que contenga solo esos números

*/


function cuentaLetras(datos){
    
    let nuevoDatos = datos.map(elemento => elemento.length);


    return nuevoDatos;
}

let nombres = ["Carlos Alberto","Eduardo","Gabriel","Eunice","Maria","Daniela"];

let LongitudDatos = cuentaLetras(nombres);

console.log(LongitudDatos);