/*

Ejercicio 5:

Muestra la suma y la media de los numeros introducidos 
hasta introducir un numeros negativo y ahi mostrar al resultado

*/

let suma = 0;
let numero = 0;
let contador = 0;


do{

    numero = parseInt(prompt("Dime numeros hasta que metas uno negativo", 0));

    if(isNaN(numero)){
        numero = 0;
        
    }else if(numero >= 0){
        suma += numero;


        contador++;
    }

}while(numero >= 0);


alert("La suma de los números es: " + suma);
alert("La media de los números es: " + (suma / contador));