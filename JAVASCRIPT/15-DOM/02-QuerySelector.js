/* Los querySelector son mejores ya que practicamente es como seleccionar en css, este solo selecciona
el primer elemento que cumpla con la buqueda, si hay 2 solo trae 1  */



// El profesor Victor robles recomienda mejor hacer uso del querySelector y querySelectorAll son mas faciles de manejar



let seccionArticulos = document.querySelector("#articulos");

seccionArticulos.style.backgroundColor = "lightblue";
seccionArticulos.style.padding = "40px";


console.log(seccionArticulos);