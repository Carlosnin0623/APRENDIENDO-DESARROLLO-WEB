/* 


Ejercicio 7:

Mostrar todos los numeros impares que hay entre dos números que nos de el usuario
*/



let numero1 = parseInt(prompt('Dime el primer número',0));
let numero2 = parseInt(prompt('Dime el segundo número',0));

while(numero1 < numero2){

    numero1++;

    if(numero1 % 2 != 0){
        console.log(`El número ${numero1} es impar`)
    }
}