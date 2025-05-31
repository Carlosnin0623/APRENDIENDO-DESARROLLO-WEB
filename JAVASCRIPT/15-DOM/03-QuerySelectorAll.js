/* QuerySelectorAll: Con el querySelectorAll, se puede seleccionar todos los elementos, que coincidan con el
selector css que le quiera pasar, y me trae una lista con todos los nodos del DOM que haya encontrado
*/


let articulos = document.querySelectorAll("#articulos .articulo"); // Selecciona todos los nodos que tengan la clase articulo

console.log(articulos);


// Recorrer elementos con forEach

articulos.forEach((elementos, indice) => {
    elementos.classList.add("articuloBase");

    if(indice === 0){

        elementos.classList.add("articuloAmarillo");

    }else if(indice === 1){

         elementos.classList.add("articuloRojo");

    }else if (indice === articulos.length - 1){
        
        elementos.classList.add("articuloUltimo");
    }


});