// Crear Array 

let dispositivos = ["pc","laptop","tablet","movil","smartwatch"];

console.log(dispositivos);

// Longitud del array

console.log(dispositivos.length); // Resultado 5

// Push: Este metodo nos permite anadir nuevos elementos, pero estos se agregan al final del array

dispositivos.push("ps5");
dispositivos.push("tostadora");

console.log(dispositivos);  // Hay 7 elementos

// Pop: Este metodo permite eliminar el ultimo elemento de un array

dispositivos.pop();

console.log(dispositivos); // Hay 6 elementos


// unshift: Este metodo permite añadir elementos el inicio del array

dispositivos.unshift("ps4");
dispositivos.unshift("psp");

console.log(dispositivos); // Hay 8 elementos

// shift: Este metodo permite eliminar el primer elemento del array

dispositivos.shift();

console.log(dispositivos); // Hay 7 elementos

// Metodos de Busqueda en array  //

/* indexOf(): Este metodo te permite buscar valores dentro del array,y si lo encuentra te devuelve su indice 
pero si no lo encuentra retorna un -1 */

let indice = dispositivos.indexOf("laptop");

console.log(indice); // Resultado 2, porque laptop se encuentra en la posicion 2 dentro del arreglo

/* includes: Es un metodo que nos ayuda a buscar elementos dentro de un array y si lo encuentra entonces retorna true
pero de no encontrarlo retorna false  */

let existe = dispositivos.includes("ps4");

console.log(existe);

// Filtrar en arrays

dispositivos.push("ps4");
dispositivos.push("ps5");
dispositivos.push("frigorifico");
dispositivos.push("robot aspirador");

// Filter: Este metodo, crea un nuevo array con lo elementos que cumpla una condicion en este caso que contengan la letra a

let dispositivosConA = dispositivos.filter((elemento) => {

   let resultado = false;

   // Buscando los elementos que tengan a
    if(elemento.includes("a")){
         resultado = true;
    }
    return resultado;
});

console.log(dispositivosConA);  // (4) ['laptop', 'tablet', 'smartwatch', 'robot aspirador']


// Metodo Reduce

let reducir = dispositivos.reduce((total, actual) => {
     return total.toUpperCase() + "," + actual;
});

console.log(reducir);

// Poner los valores que contienen a de primero
const ponerADePrimero = dispositivos.reduce((acc, actual) => {
  if (actual.includes("a")) {
    acc.conA.push(actual);

  } else {
    acc.sinA.push(actual);
  }
  return acc;
}, { conA: [], sinA: [] });


const resultadoFinal = [...ponerADePrimero.conA, ...ponerADePrimero.sinA];

console.log(resultadoFinal);


// Mas ejemplos de la funcion Reduce

/* 
 ¿Qué hace exactamente?
Recorre todo el array, uno por uno.

Guarda el resultado parcial en el acumulador.

Usa ese acumulador en la siguiente iteración.

Devuelve un único resultado final.

📦 Ejemplo 1: Sumar todos los números
javascript
Copiar
Editar
const numeros = [1, 2, 3, 4];

const suma = numeros.reduce((acum, actual) => {
  return acum + actual;
}, 0);

console.log(suma); // 10
En la 1.ª vuelta: acum = 0, actual = 1 → devuelve 1

2.ª vuelta: acum = 1, actual = 2 → devuelve 3

... y así hasta tener 10

📦 Ejemplo 2: Convertir un array en objeto
javascript
Copiar
Editar
const frutas = ["manzana", "pera", "uva"];

const resultado = frutas.reduce((acum, fruta) => {
  acum[fruta] = fruta.length;
  return acum;
}, {});

console.log(resultado);
// { manzana: 7, pera: 4, uva: 3 }
Ejemplo 3: Separar elementos con "a" y sin "a" (como tu caso)
javascript
Copiar
Editar
const dispositivos = ["mouse", "pantalla", "usb", "teclado"];

const separados = dispositivos.reduce((acc, actual) => {
  actual.includes("a") ? acc.conA.push(actual) : acc.sinA.push(actual);
  return acc;
}, { conA: [], sinA: [] });

console.log([...separados.conA, ...separados.sinA]);
Tips para entender mejor reduce:
Piensa en reduce como una caja registradora que va acumulando algo mientras recorre el array.

Siempre debes retornar el acumulador.

El segundo argumento de .reduce(..., valorInicial) es importantísimo, especialmente si estás acumulando objetos o arrays.



*/