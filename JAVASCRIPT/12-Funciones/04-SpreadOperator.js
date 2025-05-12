/* 

SPREAD OPERATOR Permite desempaquetar todos los elementos en arreglo para poder añadirlos a otro arreglo

*/



let numeros = [1,2,3,4];


let misNumeros = [...numeros, 5,6,7,8,9,10];


console.log(misNumeros);



function misPeliculas(pelicula1, pelicula2, ...resto_de_peliculas){
   console.log(pelicula1);
   console.log(pelicula2);
   console.log(resto_de_peliculas);
}


let misPelisFavs = ["Matrix Revolution", "Termintor Salvation"];


/* De esta forma le paso los 2 primeros parametros ,y luego como el tercer paremetro es rest
entonces agrupara todo lo demas en un arreglo

*/

misPeliculas(...misPelisFavs, "Matrix", "Bob Sponja");






