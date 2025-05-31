// Modificaciones 


const tarjeta = document.querySelector("#tarjeta");

console.log(tarjeta);

console.log(tarjeta.textContent); // Para ver el contenido de la tarjeta

tarjeta.textContent = "Contenido nuevo de mi tarjeta";
tarjeta.innerHTML = "<strong>Contenido HTML en mi tarjeta</strong";

tarjeta.setAttribute("data-id", 1); // Permite añadir atributos a los elementos
tarjeta.setAttribute("class", "hola que tal");
tarjeta.className = "Mejor me voy";  // para añadir clases de los elementos
tarjeta.getAttribute("class"); // Devuelve el valor del atributo seleccionado
tarjeta.style.border = "1px solid blue";
tarjeta.style.backgroundColor = "steelblue";
tarjeta.style.padding = "30px";
tarjeta.classList.add("destacar2");
tarjeta.classList.remove("destacar2");
tarjeta.classList.toggle("small");


// Crear elementos con el Dom

const titular = document.createElement("h2");
titular.textContent = "Esta es la tarjeta";

//tarjeta.append(titular); Agregar elementos al final del elemento

// tarjeta.insertBefore(titular, tarjeta.firstChild); // Insertara el titulo antes del primer hijo de la tarjeta

// tarjeta.after(titular, tarjeta.firstChild); // Insertara el titulo despues del primer hijo de la tarjeta


//tarjeta.remove(); // Me elimina el elemento


//tarjeta.querySelector("strong").remove(); // Remueve la etiqueta strong de la tarjeta


