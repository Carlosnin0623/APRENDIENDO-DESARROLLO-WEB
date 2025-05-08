/*

Ejercicio 8:


Tenemos una coleccion de numeros desde el 1 al 17


y el usuario tiene que adivinar cual es el elegido

Haz un programa para que pueda adivinar el numero


*/

const numeroAdivinar = 7;

let intento;

while(intento != numeroAdivinar){  // Como esto es true entrara al bucle

    intento = parseInt(prompt("Adivina el número del 1 al 17:"));

    if(numeroAdivinar == intento){
        alert(`Felicidades has acertado, era el ${numeroAdivinar}`);
    }else{
        alert("Sigue intentando !!!");
    }
}