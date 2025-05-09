/* 

Ejercicio 10:


En base al numero que nos de el usuario.


Decirle si es par o impar

*/

let numero = parseInt(prompt("Ingresa un número te dire si es par o impar",0));


while(isNaN(numero)){
    numero = parseInt(prompt("Ingresa un número te dire si es par o impar",0));
}


if (numero % 2 === 0) {
    alert(`El número ${numero} es par`);
} else {
    alert(`El número ${numero} es impar`);
}