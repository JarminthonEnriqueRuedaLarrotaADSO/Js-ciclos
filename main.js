addEventListener("DOMContentLoaded",()=>{
    //7. Una compañía de seguros tiene contratados a n vendedores. Cada uno hace tres ventas a la semana. Su política de pagos es que un vendedor recibe un sueldo base, y un 10% extra por comisiones de
    // sus ventas.El gerente de su compañía desea saber cuanto dinero obtendrá en la semana cada vendedor por concepto de comisiones por las tres ventas realizadas, y cuanto tomando en cuenta su sueldo base y sus comisiones.
    let n1 = Number(prompt('ingrese le numero de vendedores '))
    let n = 0
    while (n<n1) {
        n++
        let pago1 = Number(prompt('Ingrese el valor de la primera venta '))
        let pago2 = Number(prompt('Ingrese el valor de la segunda venta'))
        let pago3 = Number(prompt('Ingrese el valor de la tercera venta'))
        let sumaVentas = (pago1+pago2+pago3)
        let extra = sumaVentas*0.10
        let comisionVal = extra+sumaVentas
        console.warn(`La comision del vendedor "${n}" es de "${comisionVal}" mas su salario base...`)    
}
})