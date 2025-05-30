// DOM - Document Object Model viene siendo maso menos como el plano de una casa y permite interactuar con todos los elementos de una pagina web


// getElementByID - Seleccionar elementos por su ID


let caja = document.getElementById("caja");


// innerHtml = Permite modificar y agregar contenido html a un elemento //

// caja.innerHTML = "<p> Soy eduardo </p>"

// innerText = Permite solo modificar añador texto a un elemento html, esta propiedad no permite agregarle mas etiqutas html //

caja.innerText = "CAJITA 2";

console.log(caja);

// Modificar caracteristicas de un elemento selecionado

/*
 Agregando estilos con Javascript 

caja.style.backgroundColor = "lightblue";
caja.style.padding = "10px";
caja.style.maxWidth = "50%";
caja.style.marginInline = "auto";
caja.style.textAlign = "center";
caja.style.color = "black";
caja.style.fontSize = "20px";
caja.style.fontWeight = "bold";

*/

/* modificar y crear clases para elementos html */
caja.classList.add("cajita");

function cambiarColor(color, radius = 10){
   caja.style.backgroundColor = color;
   caja.style.borderRadius = radius;
}

cambiarColor("pink", "20px");

/* Si queremos agregar mas de una clase a un elementos con javascrip debemos usar className  */

console.log(caja.className);

caja.className = "cajaza cajon";

console.log(caja.className);

/* getElementByClassName - Permite seleccionar multiples elementos que tengan una misma clase,
esto te devolvera un htmlCollection el parecido al array puedes selecionar los elementos por su indice

puedes recorrerlo con un for como lo hacemos mas abajo

*/


let articulos = document.getElementsByClassName("articulo");

for(let i = 0; i < articulos.length; i++){

    articulos[i].classList.add("articuloBase");
    articulos[i].style.border = "1px solid #ccc";
    articulos[i].style.margin = "20px";
    articulos[i].style.padding = "20px";

     // Añadir mas HTML
    articulos[i].innerHTML += "<a href='https://victorroblesweb.es/ruta'>Leer más</a>";

    // Añadir un nodo al dom

    let enlace = document.createElement("a");
    enlace.setAttribute("href","https://victorrobles.es"); // crear o mostrar atributo a un nodo

    let textoEnlace = document.createTextNode("Sigue leyendo");  // Creando el texto para el nodo

    enlace.append(textoEnlace);  // insertando un nodo dentro de otro
    articulos[i].append(enlace); // Insertando ese nodo en cada articulo

    if(i === 0){
        articulos[i].classList.add("articuloAmarillo");
    }

    // Si queremos poner estilos al ultimo elemento usamos este hack usando length - 1 esto te dara el ultimo elemento

    if(i === articulos.length - 1){
      articulos[i].classList.add("articuloUltimo");


      articulos[i].innerHTML = "<h2> Sigue leyendo mas cosas en VictorRoblesweb.com </h2>";
    }

}

/* getElementByTagName: Permite seleccionar todos los elementos que contengan una etiqueta en espeficico,
Devuelve un HTMLCollection al igual que  getElementsByClassName */


let etiquetasArticulo = document.getElementsByTagName("article");

console.log(etiquetasArticulo);

etiquetasArticulo[2].style.backgroundColor = "green";
etiquetasArticulo[2].style.color = "white";



/* 

RECOMENDABLE: QuerySelector

RECOMENDABLE: QuerySelectorALL


*/
