// Alertas

let mensaje = "Hola soy Victor Robles Web";

alert(mensaje);


// Confirmación

let pregunta = confirm(`Estas seguro de que quieres continuar`);

console.log(pregunta);


// Promts (Ingreso de datos) permite un ventana donde el usuario puede ingresar informacion


// Convertir datos
//  ParseInt convierte el texto en un entero
//  ParseFloat convierte el texto en un numero de coma flotante



let edad = parseInt(prompt(`Que edad tienes`, 18));

let dinero = parseFloat(prompt(`Cuento dinero tiene actualmente`));

console.log(typeof edad);
console.log(typeof dinero);