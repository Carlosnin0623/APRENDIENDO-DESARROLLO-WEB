// Extraer para de un texto con substring

let cursoDos = "Master en React";

console.log(cursoDos.substring(0,6)); // Funciona igual que slice


// Concatenar o unir textos con el simbolo de +


let ciudad = "Murcia";
let pais = "España";

let fraseFinal = "Mi ciudad es " + ciudad + " y esta en "+pais;

console.log(fraseFinal);

// Concatenar o unir textos con el simbolo con template String ALT + 96


let ciudad2 = "Murcia";
let pais2 = "España";

let fraseFinal2 = `Mi ciudad es ${ciudad2} y esta en ${pais2}`;

console.log(fraseFinal2);


// Concatenar o unir textos con el simbolo con la funcion concat


let ciudad3 = "Murcia";
let pais3 = "España";

let fraseFinal3 = "".concat("Mi ciudad es ",ciudad3, " y esta en ",pais3);

console.log(fraseFinal3);


// Comienza por una palabra especifica

let fraseDos = "Bienvenido a mi nuevo curso de programación";

console.log(
    fraseDos.startsWith("Bienvenido")
);


// Acaba por una palabra especifica

let fraseTres = "Bienvenido a mi nuevo curso de programación";

console.log(
    fraseTres.endsWith("programación")
);


// Repetir palabras

let mensajito = "Javascript mola mucho!!! \n";

console.log(
    mensajito.repeat(10)
);
