/*

Crea una funcion que reciba un número y devuelva su factorial.

*/


let factorial = (numero) => {
    if (numero <= 1) {
        return 1;
    }

    let factorial = 1;

    for (let i = 2; i <= numero; i++) {
        factorial *= i; // Aquí estaba el error, antes era *= 1
    }

    return factorial;
}


console.log(Number(factorial(10)));