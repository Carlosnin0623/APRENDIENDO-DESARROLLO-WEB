// Bucles para recorrer arreglos


console.log("*****************************");


let actores = ["Arnold Swaseneger","Sylverter Stallones","Al pacino","Leonardo Dicaprio","Brad Pit"];

console.log("Listado de actores: ");


// Bucle For

for(let i = 0; i < actores.length; i++){
    console.log(`${actores[i]}`);
}


// Bucle For OF es una forma mas facil de recorrer arreglos sin necesidad de usar un indice

console.log("*****************************");

console.log("Listado de actores: ");


// Acceder directamente a los valores del array recorrido

for(let actor of actores){
    console.log(actor);
}


// Bucle for In: Accede a los indices del array recorrido y luego usar ese indice para recorrer los valores


for(let indice in actores){
    console.log(indice, actores[indice]);
}


// Bucle forEach


actores.forEach((actor, indice) => {
    console.log(actor, indice);
})


// Bucle Map: El map te devuelve un nuevo array y puedes aplicar funciones y no afecta el array original

let nuevosActores = actores.map(actor => {
    console.log(actor);


    return actor + " Hollywood";
});


console.log(nuevosActores);