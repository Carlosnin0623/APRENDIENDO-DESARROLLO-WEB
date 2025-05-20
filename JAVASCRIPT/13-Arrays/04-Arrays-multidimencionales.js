

// Arrays multidimencionales

let categorias = ["Lucha","Deportes","Acción","Sanbox","Carreras"];

let titulos = ["Tekken","Fifa","Max Payne 3","GTA 6","NFS Unbond"];


let videojuegos = [categorias, titulos];

console.log(videojuegos);

console.log(videojuegos[1][2]);  //Max Payne 3
console.log(videojuegos[0][4]); // Carreras


// Arrays bidimencionales


let tabla = [
    ["Producto","Cantidad","Precio"],
    ["PC", 2, 350],
    ["Smartphone",4,127],
    ["Impresora",10,57]
];


// console.log(tabla[2][0], tabla[2][2]);

console.table(tabla);

document.writeln("<table border=1>");


tabla.forEach((fila, indice) => {

    document.writeln("<tr>");
    fila.forEach(elemento=> {
        if(indice === 0){
            document.writeln("<th>"+elemento+"</th>");
        }else{
            document.writeln("<td>"+elemento+"</td>");
        }
    });
    document.writeln("</tr>");
})

document.writeln("</table>");



// Arrays tridimensionales 

let cartaRestaurante = [
    ["Plato", "Cantidad", "Precios", "Tamaño"],
    ["Menu Pizza",  2, [8,10,15],  ["pequeño","mediano","grande"]],
    ["Menu Burger", 2, [10,12,17], ["pequeño","mediano","grande"]],
    ["Menu Paella", 2, [14,18,25], ["pequeño","mediano","grande"]],
]


for(let menu of cartaRestaurante){

    console.log("-----------------------");

    for(let elemento of menu){

       // console.log(elemento);
        if(Array.isArray(elemento)){

            for(let subElemento of elemento){

                console.log(subElemento);
            }
        }else{
            console.log(elemento);
        }
    }
}


