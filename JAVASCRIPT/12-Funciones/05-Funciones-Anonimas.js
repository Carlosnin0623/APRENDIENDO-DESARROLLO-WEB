/* Funciones Anonimas

Son funciones que no tienen nombre



*/


const saludo = function(nombre = ""){
    console.log(`Hola abuela ${nombre} como estas!!`);
}

saludo();


let veces = 0;

/*
setInterval(function(){
  veces++;
  console.log("Se ha ejecutado el timeout " + veces+ " veces");
},2000);

*/


/*
setInterval(saludo, 1000);

*/


// Este es una forma de ejecutar otras funciones dentro de setInterval o SetTimeout

setInterval(function(){
   saludo("Maria");
},4000);