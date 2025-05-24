/*

Crea un funcion que reciba una palabra y devuelva cuantas vocales tiene

*/


let nombre = "Neifis Vasquez Ferreras";

let arreglo = Array.from(nombre);

let contador = 0;

arreglo.forEach(vocal => {

    switch (vocal) {
        case "a":
        case "A":
            contador++;
            break;

        case "e":
        case "E":
            contador++;
            break;

        case "i":
        case "Y":
            contador++;
            break;

        case "o":
        case "O":
            contador++;
            break;

        case "u":
        case "U":
            contador++;
            break;

        default:

            break;
    }
});

document.writeln(nombre);
console.log("La cantidad de vocales en esta palabra es: " + contador);