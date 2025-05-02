/* 

Ejercicio 6

En mi tienda de videojuegos tenemos una oferta.


Si compras un juego de 50 euros o mas, te hacemos un 20% de descuento.

Si un cliente compra el tekken 15 que cuesta 50 euros, en cuanto le queda
*/

let precioOriginal = 50;
let precioFinal;

if (precioOriginal >= 50) {     // 100 - 20 = 80 / 100 = 0.8
  precioFinal = precioOriginal * 0.8; // Aplica 20% de descuento
} else {
  precioFinal = precioOriginal; // No hay descuento
}

console.log(`EL monto final a pagar es ${precioFinal} euros con la oferta.`);