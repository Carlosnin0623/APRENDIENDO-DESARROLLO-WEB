/* 

Ejercicio 21:


Calculadora:

  - Pida dos numeros por pantalla
  - Si metemos uno mal que nos lo vuelva a pedir
  - En una alerta y por consola el resultado de sumar, restar, multiplicar
   y dividir esas 2 cifras
*/


let numero1;
let numero2;

do{
   numero1 = parseInt(prompt("Digita el primer número", 0));

   numero2 = parseInt(prompt("Digita el segundo número", 0));

}while(isNaN(numero1) || isNaN(numero2));


let resultado = `Suma: ${numero1 + numero2} \n`;
    resultado += `Resta: ${numero1 - numero2} \n`;
    resultado += `Multiplicacion: ${numero1 * numero2} \n`;
    resultado += `Division: ${numero1 / numero2}`;


alert(resultado);
console.log(resultado);







