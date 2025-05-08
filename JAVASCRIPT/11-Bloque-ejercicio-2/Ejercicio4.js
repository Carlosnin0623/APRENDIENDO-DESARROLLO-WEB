/* 

Ejercicio 4:


Un DJ no sabe que genero musical poner en la fiesta...


Preguntale al usuario que genero quiere (pop, rock, rap)


Segun lo que prefiera devuelve un mensaje diferente

*/

let genero;
let respuesta;


do{
    genero = prompt(`Que musical quieres escuchar pop, rock, o rap`);


    switch(genero){

        case "pop":
        case "POP":
        case "Pop":
            alert("Reproduciendo pop...");
        break;
        
        case "rock":
        case "ROCK":
        case "Rock":
            alert("Reproduciendo rock...");
        break; 
    
        case "rap":
        case "RAP":
        case "Rap":
            alert("Reproduciendo rap...");
        break; 
    
        default:
           alert("No puedo, no me se ninguna canción de ese genero");
        break;
    }

    respuesta = prompt(`Quieres volver a intentar`);

}while(respuesta === "si" || respuesta === "SI" || respuesta === "Si");
   

