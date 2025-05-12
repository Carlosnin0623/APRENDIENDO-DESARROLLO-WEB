/* Parametro Rest 

Los parametros Rest, Nos permiten agrupar todos los valores adicionales que puede
recibir una funcion en un solo array, es util cuando no sabemos cuantos
parametros le vamos a pasar a la funcion

*/


// El parametros Rest se representa con 3 puntos seguidos ... y un nombre ejemplo ...resto_de_peliculas


function misPeliculas(pelicula1, pelicula2, ...resto_de_peliculas){
   console.log(pelicula1);
   console.log(pelicula2);
   console.log(resto_de_peliculas);
}


misPeliculas("Matrix", "El Padrino 2", "Scare Face", "Terminator", "Jurassic Park");