addEventListener("DOMContentLoaded",()=>{
    //8. Diseñar un pseudocódigo que calcule el promedio ponderado para alumno del ITT. El cálculo se hace
    // de la siguiente forma:
    // Se multiplica cada calificación por los créditos de cada materia
    // El resultado anterior se suma con los resultados de todas las materias, por separado se suman los
    // créditos de cada materia y finalmente se divide la suma de todas las materias por sus respectivos
    // créditos, entre la suma de todos los créditos. (materias: Fundamentos, BD y ética).
let n = 0
let cantEstudiantes = Number(prompt('ingrese la cantidad de estudiantes a la cual va evaluar el ponderado'))
while (n<cantEstudiantes) {
    n++
    let creditos1 = Number(prompt('Ingrese los creditos de la materia "Fundamentos"'))
    let creditos2 = Number(prompt('Ingrese los creditos de la materia "BD" '))
    let creditos3 = Number(prompt('Ingrese los creditos de la materia "Etica"'))
    let calificacion1 = Number(prompt('Ingrese la calificacion de la materia "Fundamentos"'))
    let calificacion2 = Number(prompt('Ingrese la calificacion de la materia "BD"'))
    let calificacion3 = Number(prompt('Ingrese la calificacion de la materia "Etica"'))
    let mul1 =calificacion1*creditos1 
    let mul2 = calificacion2*creditos2
    let mul3 =calificacion3*creditos3
    let sumMaterias1 = mul1+ calificacion1
    let sumMaterias2 = mul2+calificacion2
    let sumMaterias3 = mul3+calificacion3
    let valMaterias = sumMaterias1+sumMaterias2+sumMaterias3
    let sumCreditos = creditos1+creditos2+creditos3
    let ponderado = valMaterias/sumCreditos
    console.warn(`El promedio de su ponderado de 3 materias, segun las notas ingresadas es de ${ponderado}`)
}
})