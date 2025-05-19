let frameworks = ["Angular", "React", "Vue", "Astro","NodeJs","Svelte"];


// Acceso con bucles a los elementos de un arreglo

for(let i = 0; i < frameworks.length; i++){
    console.log(frameworks[i]);
}


// Mostrar los elementos por la pagina web con document.writeln


for(let i = 0; i < frameworks.length; i++){
    document.writeln(`<h3> Me encanta ${frameworks[i]} </h3>`);
}