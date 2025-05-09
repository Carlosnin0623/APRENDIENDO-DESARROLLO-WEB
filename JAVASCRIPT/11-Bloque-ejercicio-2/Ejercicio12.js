/* 

Ejercicio 22:

Tenemos una bolsa con 37 caramelos.


Cada vez que te comes uno, quedan menos.


Haz una simulación de esto con un bucle
*/


let caramelosEnBolsa = 37;
let carameloConsumidos;
let respuesta;


do{
   carameloConsumidos = parseInt(prompt("Digita la cantidad de caramelos que comiste"));

   caramelosEnBolsa -= carameloConsumidos;

   if(caramelosEnBolsa <= 0){
     alert(`Ya no quedan caramelos en la bolsa`);
     break;
   }else{
       alert(`Te quedan ${caramelosEnBolsa} en la bolsa`);
       respuesta = confirm(`Quieres comer repetir?`);
   }

}while(respuesta === true);
