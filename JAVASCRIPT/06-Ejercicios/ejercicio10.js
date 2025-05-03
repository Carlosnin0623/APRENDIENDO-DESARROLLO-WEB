/* 

Ejercicio 10 

El otro dia fui con mi amigo Pepe y Manolo a un restaurante de smash burgers.


Yo me comi 2, pepe se comio 3 y manolo, como es culturista, se comio 6.


Cuantas hamburguesas nos comimos en total?


y... Es cierto que comi menos que pepe?

*/


let HamburguesasYo = 2;
let HamburguesasPepe = 3;
let HamburguesasManolo = 6;

let totalHamburguesas = HamburguesasYo + HamburguesasPepe + HamburguesasManolo;

if(HamburguesasPepe > HamburguesasYo){
    console.log(`En total comieron ${totalHamburguesas} hamburguesas y si pepe comió mas que tu`);
}else{
    console.log(`En total comieron ${totalHamburguesas} hamburguesas`); 
}