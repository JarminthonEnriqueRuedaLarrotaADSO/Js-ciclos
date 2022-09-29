addEventListener("DOMContentLoaded",()=>{
    // 3. Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso de
    // computación.
    let n = 0
    acum = 0
    var promedio
    while (n<5) {
        n++
        let nombre = (prompt('ingrese su nombre'))
        let apellido = (prompt('Ingrese su apellido'))
        let edad = Number(prompt('Ingrese su edad'))
        let nota = Number(prompt('Ingrese su nota'))
        acum += nota
        promedio = acum/2
        console.log(`${nombre}`)
        console.log(`${apellido}`)
        console.log(`${edad}`)
        console.log(`${nota}`)
        console.log(`----------------------------`)

    }
console.warn(`El promedio de las notas de los estudiantes es : ${promedio}`)
})