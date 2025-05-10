// Funciones dentro de otras


function porConsola(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));

    return true;
}

function operaciones(numero1, numero2){

    let resultado = {
        "suma": (numero1 + numero2),
        "resta": (numero1 - numero2),
        "multiplicacion": (numero1 * numero2),
        "division": (numero1 / numero2)
    }

    return resultado;
}



function porPantalla(numero1, numero2) {

    let resultados = operaciones(numero1, numero2);

    document.writeln("<h2> Suma: " + resultados.suma + "</h2>");
    document.writeln("<h2> Resta: " + resultados.resta + "</h2>");
    document.writeln("<h2> Multiplicación: " + resultados.multiplicacion + "</h2>");
    document.writeln("<h2> División: " + resultados.division + "</h2");
    document.writeln("<hr>");

    return true;
}



function calculadora(numero1, numero2, mostrar = false) {


    if (mostrar == false) {

        porConsola(numero1, numero2);

    } else {

        /* document.writeln Nos permite escribir expresiones html en la pagina donde se ejecute el javascript */
        porPantalla(numero1, numero2);
    }

    return true;
}


calculadora(10, 20, true);