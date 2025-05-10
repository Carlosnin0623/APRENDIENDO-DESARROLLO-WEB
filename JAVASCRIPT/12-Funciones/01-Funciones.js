// Funciones 
/* Una funciones agrupa una serie de instrucciones bajo un nombre, para poder usarlas
varias veces  */

function saludo(nombre = "Maria", plato = "Dulce de Leche") {
    console.log(`Hola como estas abuelita ${nombre}`);
    console.log("Que tal estas");
    console.log(`Me pasas la receta de tu ${plato}`);


    return `Abuela ${nombre} saludada correctamente!!!`;  // El return indica que la funcion va a devolver algo, y corta la ejecucion del proceso
}

let resultado = saludo("Mari", "Arroz con coco");


saludo("Maria", "Tortilla");
saludo("Pepa", "Espaguetis");
saludo("Laura", "Potaje");
saludo();

function calculadora(numero1, numero2, mostrar = false) {

    if (mostrar == false) {

        console.log("Suma: " + (numero1 + numero2));
        console.log("Resta: " + (numero1 - numero2));
        console.log("Multiplicación: " + (numero1 * numero2));
        console.log("División: " + (numero1 / numero2));

    }else{

     /* document.writeln Nos permite escribir expresiones html en la pagina donde se ejecute el javascript */

        document.writeln("<h2> Suma: " + (numero1 + numero2) + "</h2>");
        document.writeln("<h2> Resta: " + (numero1 - numero2) + "</h2>");
        document.writeln("<h2> Multiplicación: " + (numero1 * numero2) + "</h2>");
        document.writeln("<h2> División: " + (numero1 / numero2) + "</h2");
    }

    return true;
}


calculadora(10, 9, true);