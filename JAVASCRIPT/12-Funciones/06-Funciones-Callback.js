/* Funciones CallBack son funciones que pasan funciones como parametros y estas funciones dentro de la funcion
se encargan de realizar una serie de instrucciones

*/


function restame(n1,n2, mostrar, multiplicarPorTres){

    let resta = n1 - n2;


    mostrar(resta);

    multiplicarPorTres(resta);

}


restame(20,5, function(resultado){

   console.log(resultado);

}, function(resultado){
    console.log(resultado * 3);
})