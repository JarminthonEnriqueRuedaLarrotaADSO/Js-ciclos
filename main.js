addEventListener("DOMContentLoaded",()=>{
    //2. Hacer un algoritmo que al ingresar 2 números por la pantalla y se calcule la suma, resta, multiplicación
    // y división. El proceso debe terminar cuando se hallan realizado 10 procesos (Hacer uso de
    // contadores).
    let cont = 0
    while (cont < 10){
        cont++
        let dato1 = Number(prompt('Ingrese el primer dato '))
        let dato2 = Number(prompt('Ingrese el segundo dato '))
        let suma = dato1+dato2
        let resta = dato1-dato2
        let multiplicacion = dato1*dato2
        let divicion = dato1/dato2
        console.log(`La suma de ${dato1} + ${dato2} = ${suma}`);
        console.log(`La resta de ${dato1} + ${dato2} = ${resta}`);
        console.log(`La multiplicacion de ${dato1} + ${dato2} = ${multiplicacion}`);
        console.log(`La divicion de ${dato1} + ${dato2} = ${divicion}`);
    }

})