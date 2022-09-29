addEventListener("DOMContentLoaded",()=>{
    //5. El profesor de una materia desea conocer la cantidad de sus alumnos que no tienen derecho al examen
    // de nivelación. Diseñe un pseudocódigo que lea las calificaciones obtenidas en las 5 unidades por cada
    // uno de los 40 alumnos y escriba la cantidad de ellos que no tienen derecho al examen de nivelación.
    let  n = 0
    let nivelacion = 0
    var promedio
    console.warn('La nota se define segun si obtuvo mas de 3 pasa y no merece hacer el examen de lo contrario si obtuvo menos de 3 tiene que hacer el examen.');
    while (n<50){
        n++
    let nota1 = Number(prompt(`Alumno ${n} Ingrese sus notas para calcular si tiene derecho a la nivelacion`))
    let nota2 = Number(prompt(`Alumno ${n} Ingrese sus notas para calcular si tiene derecho a la nivelacion`))
    let nota3 = Number(prompt(`Alumno ${n} Ingrese sus notas para calcular si tiene derecho a la nivelacion`))
    let nota4 = Number(prompt(`Alumno ${n} Ingrese sus notas para calcular si tiene derecho a la nivelacion`))
    let nota5 = Number(prompt(`Alumno ${n} Ingrese sus notas para calcular si tiene derecho a la nivelacion`))
    nivelacion = nota1+nota2+nota3+nota4+nota5
    promedio = nivelacion/5
    if (promedio<3) {
        console.log(`Alumno ${n} Tiene derecho al examen de nivelacion "ut ha perdido  :(" `)
    }    
    else{
        console.log(`Alumno ${n} No tiene derecho al examen de nivelacion "ut ha pasado :) " `)
    }
    }
})