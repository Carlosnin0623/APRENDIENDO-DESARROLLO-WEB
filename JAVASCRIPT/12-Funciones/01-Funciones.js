// Funciones 
/* Una funciones agrupa una serie de instrucciones para poder usarlas
varias veces  */

function saludo(nombre, plato){
    console.log(`Hola como estas abuelita ${nombre}`);
    console.log("Que tal estas");
    console.log(`Me pasas la receta de tu ${plato}`);


    return "Abuela saludada";  // El return indica que la funcion va a devolver algo, y corta la ejecucion del proceso
}

let resultado = saludo();


alert(resultado);