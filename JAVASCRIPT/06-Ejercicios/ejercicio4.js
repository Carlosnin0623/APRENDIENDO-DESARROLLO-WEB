/* 

Ejercicio 4

Tenemos una jirafa en el zoo que pesa 1.120 kilos

y le damos de comer 141 kilos de hojas frescas.

Cuanto pesa ahora la jirafa 


*/

let pesoJirafa = 1120;
let pesoComida = 141;

console.log("EL peso de la jirafa es: ", pesoJirafa + pesoComida);


/* Template string  alt + 96 son como unas comillas usadas para concatenar mas facil la informacion */

let resultado = `EL peso de la jirafa ahora es ${pesoJirafa + pesoComida}`;

console.warn(resultado);