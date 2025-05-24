/* 

Ejercicio 5:

1. Pide 6 numeros por pantalla y metelos en un array  listo
2. Muestra el array completo en el cuerpo de la pagina y en la consola listo
3. ordenalo y muestralo Listo
4. Invierte su orden y muestralo Listo.
5. Muestra cuantos elementos tiene el array. Listo
6. Busca uno de los valores que ha metido el usuario, que nos diga si lo encuentra
y su indice. Listo
7. Refactorizar todo lo posible usando funciones
*/

let arreglo = [];

function CrearArreglo(numero) {

    arreglo.push(numero);


    return arreglo;
};

function mostrarArreglo(arreglo) {

    document.writeln("<ul>");
    document.writeln("<h2>" + "Los números ingresados fueron: " + "</h2>");
    arreglo.forEach(numero => {
        document.writeln("<li>" + numero + "</li>");
    });
    document.writeln("</ul>");

    console.log("Los números ingresados fueron: \n ");
    arreglo.forEach(numero => {
        console.log(numero);
    });
}


function ordenarArray(arreglo) {
    document.writeln("<ul>");
    document.writeln("<h2>" + "Estos son los números ordenados: " + "</h2>");
    arreglo.sort();
    arreglo.forEach(numero => {
        document.writeln("<li>" + numero + "</li>");
    });
    document.writeln("</ul>");

    console.log("Estos son los números ordenados: \n ");
    arreglo.sort();
    arreglo.forEach(numero => {
        console.log(numero);
    });
}


function RevertirArray(arreglo) {
    document.writeln("<ul>");
    document.writeln("<h2>" + "Estos son los números invertidos: " + "</h2>");
    arreglo.reverse();
    arreglo.forEach(numero => {
        document.writeln("<li>" + numero + "</li>");
    });
    document.writeln("</ul>");

    console.log("Estos son los números invertidos: \n ");
    arreglo.forEach(numero => {
        console.log(numero);
    });
}

function longitudArray(arreglo) {

    document.writeln("<h2> La cantidad de elementos que hay en el array es: " + arreglo.length + "<h2");

    console.log("La cantidad de elementos que hay en el array es: " + arreglo.length);
}

function BuscarEnArreglo(numero, arreglo) {

    let indice = arreglo.indexOf(numero);

    if (indice != - 1) {
        document.writeln("<h2>Existe un elemento en el array con este valor y su posisión es:" + indice + "<h2>");
        console.log("Existe un elemento en el array con este valor y su posisión es:" + indice)
    } else {
        document.writeln("<h2> Lo siento no he podido encontrar el valor a buscar </h2>");
        console.log("Lo siento no he podido encontrar el valor a buscar");
    }
}



let contador = 0;
let numero;
let contenedor = [];
let elegir;

do {

    numero = parseInt(prompt("Introduce un número", 0));

    contenedor = CrearArreglo(numero);

    contador++;

} while (contador < 6);

elegir = parseInt(prompt("Ingrese el valor a buscar"));


mostrarArreglo(contenedor);
ordenarArray(contenedor);
RevertirArray(contenedor);
longitudArray(contenedor);
BuscarEnArreglo(elegir, contenedor);






