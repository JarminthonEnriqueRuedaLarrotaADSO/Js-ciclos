addEventListener("DOMContentLoaded",()=>{
    //6. Un avión que viaja 800 Km/hr. Dispara un proyectil auto impulsado, en el momento del disparo, el avión hace un giro de 90 grados y acelera a 20 mtrs/seg2. El proyectil sigue su curso, acelerando a 10 mtrs./seg2. Diseñe un pseudocódigo que escriba cada segundo, la distancia que separa al avión del
    // proyectil, hasta que estén a 10,000 mtrs. o más.
    let m = 20
    let n = 10
    var s = 0
    var z = 0
    while (n < 10001) {
        n+=10
        s += 1

    }
    while (m < 10001) {
        m+=20
        z += 1

    }
    console.log(`El tiempo que tarda el avion en alcanzar 10km de separacion del proyecil son "${s}" segundos`);
    console.log(`El tiempo que tarda el proyectil en alcanzar 10km de separacion del avion son "${z}" segundos`);
})