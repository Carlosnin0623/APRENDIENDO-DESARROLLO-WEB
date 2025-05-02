/*

Tengo una heladeria y cada bola de helado vale 1.8 euros.


Cuantos cuestan las cucuruchos de 1,2 y 3 bolas?


Ten en cuenta que el barquillo cuesta cincuenta centimos de euros.



*/

let precioBola = 1.8;

let precioBarquillo = 0.5;

let heladoUna =  (precioBola * 1) + precioBarquillo;

let heladoDos =  (precioBola * 2) + precioBarquillo;

let heladoTres = (precioBola * 3) + precioBarquillo;

console.log(`
   1. Cucurucho de una  bola: ${heladoUna}
   2. Cucurucho de dos  bola: ${heladoDos}
   3. Cucurucho de tres bola: ${heladoTres}
    `);