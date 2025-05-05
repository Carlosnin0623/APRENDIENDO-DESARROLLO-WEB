// Condicional Switch


let miDesayuno = 3;

switch(miDesayuno){

    case 1:
       // Bloque de instrucciones
       console.log(`Has elegido tortitas con sirope de Arce`);
    break;

    case 2:
       // Bloque de instrucciones
       console.log(`Has elegido huevos fritos con bacon`);
    break;

    case 3:
       // Bloque de instrucciones
       console.log(`Has elegido un Colacao con copos de avena`);
    break;

    default:
         // Bloque de instrucciones
        console.log(`Has elegido otro desayuno diferente....`);
}

// Operador Ternario

let nombre = "Juan Alberto";

let edad = 18;

let resultado = (edad >= 18) ? "Tu eres mayor de edad, puedes trabajar" : "Tu aún no has cumplido la edad para trabajar"


console.log(resultado);

// Diferencia entre var y let (Alcance / bloque)

/* 

En JavaScript, let y var se usan para declarar variables, pero tienen diferencias importantes que afectan el alcance, la reasignación y el comportamiento en tiempo de ejecución. Aquí están las diferencias clave:

 1. Ámbito (Scope)
var: Tiene ámbito de función. Si declaras una variable con var dentro de una función, solo existe dentro de esa función. Si está fuera de una función, es global.

let: Tiene ámbito de bloque. Esto significa que solo existe dentro del bloque {} donde fue declarada (como un if, for, o función).

javascript
Copiar
Editar
function ejemplo() {
  if (true) {
    var x = 10;
    let y = 20;
  }
  console.log(x); // 10
  console.log(y); // Error: y is not defined
}

*/


//let curso = "Master en javascript";


if("hola" === "hola"){                // Fijate que si la declaras con let dentro de un bloque no puedes llamarla en el console log
   let curso = "Master en CSS3";
}

console.log(curso);


if("hola" === "hola"){   // Fijate que si la declaras con var dentro de un bloque puedes llamarla en el console log ya que es global
    var curso1 = "Master en CSS3";
 }
 
 console.log(curso1);