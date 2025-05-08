/* 

Ejercicio 2:

Programa que pida 2 numeros y que nos diga cual es el mayor, el menor y si 
son iguales.



PLUS: Si los numeros no son numeros o son menor o igual a 0,
nos los vuelva a pedir


*/
let numero1;

let numero2;

do{

    numero1 = parseInt(prompt(`Ingrese el primer número`));

    numero2 = parseInt(prompt(`Ingrese el segundo número`));

}while((isNaN(numero1) || isNaN(numero2)) || (numero1 <= 0 || numero2 <= 0));


if(numero1 > numero2){
    alert(`El número ${numero1} es el mayor`);
}else if (numero2 > numero1){
    alert(`El número ${numero2} es el mayor`);
}else if (numero1 === numero2 || numero2 === numero1){
    alert(`Los numeros son iguales`);
}