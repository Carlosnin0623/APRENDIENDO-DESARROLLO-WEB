/* 

Ejercicio 1:

Nuestros usuarios tienen perros.


Y quieren saber que edad de perro tienen sus mascotas.


Un año de humano equivale a siete de perro.


Pregunta a los usuarios que edad tiene su perro y dile la edad canina

*/


let edad = parseInt(prompt(`Hace cuento tiempo nacio tu perro`));

const equivalente = 7;

let total = edad * equivalente;


alert(`Si fue hace ${edad} años entonces tu perro tiene ${total} de edad canina`);

