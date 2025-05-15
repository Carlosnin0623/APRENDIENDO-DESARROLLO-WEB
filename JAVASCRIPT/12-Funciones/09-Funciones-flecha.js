// Funciones de flecha 


// Definir una funcion

let curso = () => {

    console.log("+100 Proyectos de desarrollo web con html, css y Javascript");
}

curso();


setTimeout(function(){
     curso();
},4000);



// Utilizar en un callback