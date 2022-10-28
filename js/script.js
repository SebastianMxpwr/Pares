let tarjetasDestapas = 0
let tarjeta1 = null
let tarjeta2 = null
let primerResultado = null
let segundoResultado = null
let movimientos = 0
let aciertos = 0
let temporizador = false
let timer = 0
let tiempoRegresivoVoid = null
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]
let numerostemp = []

let mostrarMovimientos = document.getElementById('movimiento')
let mostrarAcciertos = document.getElementById('aciertos')
let mostrarTiempo = document.getElementById('timpoe_restante')


function reinciarJuego(){
    numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]
    numerostemp = []
    randomizar()

}

function randomizar(){
    numeros = numeros.sort(()=>{return Math.random() -0.5})
    for (let i = 0; i < 8; i++) {
        numerostemp.push(numeros[i])
        console.log(numerostemp);
    }
    numeros = numeros.splice(0, 8).concat(numerostemp).sort(()=>{return Math.random() -0.5})
}

randomizar()

function contarTiempo(){
    tiempoRegresivoVoid = setInterval(()=>{
        timer++
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`
    }, 1000)
}

//funcion principal
function destapar(id){

    if(temporizador == false){
        contarTiempo()
        temporizador = true
    }

    tarjetasDestapas ++
    if(tarjetasDestapas == 1){
        tarjeta1 = document.getElementById(id)
        primerResultado = numeros[id]
        tarjeta1.innerHTML = `<img src="../img/${primerResultado}.jpg">`
        tarjeta1.disabled = true
    }else if(tarjetasDestapas == 2){
        tarjeta2 = document.getElementById(id)
        segundoResultado = numeros[id]
        tarjeta2.innerHTML = `<img src="../img/${segundoResultado}.jpg">`
        tarjeta2.disabled = true
        

        if(primerResultado == segundoResultado){
            tarjetasDestapas = 0
            aciertos++
            mostrarAcciertos.innerHTML = `Aciertos: ${aciertos}`

            if(aciertos == 8){
                clearInterval(tiempoRegresivoVoid)
                mostrarAcciertos.innerHTML = `Perfecto con tus ${aciertos} aciertos`
                mostrarMovimientos.innerHTML = `Te tomó ${movimientos} movimientos`
                mostrarTiempo.innerHTML = `Acabaste en ${timer} segundos`
                reinciarJuego()
            }
        }else{
            movimientos++
            mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`
            setTimeout(()=>{
                tarjeta1.innerHTML = ''
                tarjeta2.innerHTML = ''
                tarjeta1.disabled = false
                tarjeta2.disabled = false
                tarjetasDestapas = 0
            },500)
        }
    }
    
}