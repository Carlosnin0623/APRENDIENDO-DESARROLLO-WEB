// Constantes

/* Una constante es una variable cuyo contenido no puede cambiar */

let nombre = "Victor";
let web = "victorroblesweb.es/ruta";

const dni = "9798324739479P";

nombre = "Julio";

/* Al intentar cambiar el valor del dni la consola nos arroja una alerta diciendo que ya esta variable contiene un valor
y ya no se puede modificar */

// dni = "8798324739479P"  Error: Uncaught TypeError: Assignment to constant variable.


console.log(nombre,dni);
