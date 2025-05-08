/*

Ejercicio 6:

Escribe un programa que muestra la tabla de multiplicar del numero
que te diga el usuario.


*/


let numero = parseInt(prompt(`De que número quieres la tabla de multiplicar`));

let resultadoCompleto = "TABLA DEL "+ numero;

for(let i = 1; i <= 10; i++){

    let multiplicacion = numero * i;

    console.log(`${numero} x ${i} = ${numero * i}`);

    resultadoCompleto += "\n"+numero+" x "+i+" = "+multiplicacion;
}



console.log(resultadoCompleto);
alert(resultadoCompleto);