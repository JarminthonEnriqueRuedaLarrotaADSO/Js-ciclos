addEventListener("DOMContentLoaded",()=>{
///1. en una granja se requiere saber alguna informacion para determinar el precio de venta por cada kilo de huevo. precio se determina a traves del promedio de calidad de las N gallinas que hay en la granja. La calidad de cada gallina se obtiene segun la formula  ..........calidad = (peso gallina*alturagallina)/Numero de huevos que pone
let ac = 0
let n = 0
let n1 = Number(prompt('ingrese la cantidad N de gallinas.', ))
while(n < n1){
    n++
    let pesoGallinas = Number(prompt(' Ingrese el peso de la gallina '))
    let alturaGallina = Number(prompt('Ingrese la altura de la gallina '))
    let numerHuveos = Number(prompt('Ingrese la cantidad de huevos que pone '))
    let calidad = (pesoGallinas*alturaGallina)/numerHuveos
    console.log(`El numero de calidad de la gallina es : ${calidad}`);
}
//console.log(`${ac}`);

})