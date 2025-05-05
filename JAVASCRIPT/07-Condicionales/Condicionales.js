// Condicional IF 


let estaLloviendo = false;


if(estaLloviendo === true){

    // Se ejecuta esta

    console.log("Me llevo mi paraguas, para que no me llueva encima!!");
}else{
    // Si no se cumple, ejecuta esto otro

    console.log("No me llevo paraguas");
}

// Ejemplo 2


let quieroCebolla = false;


if(quieroCebolla){
    console.log(`Tu hamburguesa llevará cebolla`);
}else{
    console.log(`Tu burguer no lleva cebolla`);
}

// Ejemplo 3

let nombreAlumno = "Joaquin Perez";
let edad = 31;

if(edad >= 18){
    console.log(`El alumno es mayor de edad`);

    if(edad <= 20){
        console.log(`El alumno todavia es un adolecente`);

    }else if(edad >= 70){
       console.log(`El alumno ya es un anciano`);

    }else{
        console.log(`El alumno ya es un adulto`);
    }
}else{
    console.log(`El alumno no es mayor de edad`);
}

// Ejemplo 4 Negacion

let buenTiempo = true;

if(!buenTiempo){
    console.log(`Nos podre ir al parque porque esta lloviendo`);
}

// Ejemplo 5 Operador And

let year = 2031;

if(year >= 2000 && year <= 2023){
    console.log(`Estamo en la era moderna`);
}else if (year > 2030){
    console.log(`Estamos en la era postmoderna`);
}else{
    console.log(`Estas en la era antigua`);
}


// Ejemplo 6 Operador Or


if(year === 2007 || year === 2017 || year === 2027 || year === 2037){
   console.log(`El año acaba en 7`);
}else{
    console.log(`Año desconocido!`);
}