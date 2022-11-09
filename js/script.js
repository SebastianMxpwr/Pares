let tarjetasDestapas = 0
let tarjeta1 = null
let tarjeta2 = null
let tarjetaTemp = null
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
    movimientos = 0
    aciertos = 0
    temporizador = false
    timer = 0
    tiempoRegresivoVoid = null
    mostrarAcciertos.innerHTML = `Perfecto con tus ${aciertos} aciertos`
    mostrarMovimientos.innerHTML = `Te tomó ${movimientos} movimientos`
    mostrarTiempo.innerHTML = `Acabaste en ${timer} segundos`
    for (let i = 0; i < 16; i++) {
        tarjetaTemp = document.getElementById(i)
        tarjetaTemp.innerHTML = ''
        tarjetaTemp.disabled = false
        tarjetaTemp.style.backgroundColor = "rgb(111, 111, 194)" 
    }

    randomizar()

}

function randomizar(){
    numeros = numeros.sort(()=>{return Math.random() -0.5})
    for (let i = 0; i < 8; i++) {
        numerostemp.push(numeros[i])
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
        tarjeta1.style.border = '2px solid black'
        tarjeta1.disabled = true
    }else if(tarjetasDestapas == 2){
        tarjeta2 = document.getElementById(id)
        segundoResultado = numeros[id]
        tarjeta2.innerHTML = `<img src="../img/${segundoResultado}.jpg">`
        tarjeta2.style.border = '2px solid black'
        tarjeta2.disabled = true
        

        if(primerResultado == segundoResultado){
            tarjetasDestapas = 0
            aciertos++
            tarjeta1.style.backgroundColor = "green";
            tarjeta2.style.backgroundColor = "green";
            mostrarAcciertos.innerHTML = `Aciertos: ${aciertos}`

            if(aciertos == 8){
                clearInterval(tiempoRegresivoVoid)
                mostrarAcciertos.innerHTML = `Perfecto con tus ${aciertos} aciertos`
                mostrarMovimientos.innerHTML = `Te tomó ${movimientos} movimientos`
                mostrarTiempo.innerHTML = `Acabaste en ${timer} segundos`
            }
        }else{
            movimientos++
            mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`
            tarjeta1.style.backgroundColor = "red";
            tarjeta2.style.backgroundColor = "red";
            setTimeout(()=>{
                tarjeta1.style.backgroundColor = "rgb(111, 111, 194)"   
                tarjeta2.style.backgroundColor = "rgb(111, 111, 194)"   
                tarjeta1.innerHTML = ''
                tarjeta2.innerHTML = ''
                tarjeta1.disabled = false
                tarjeta2.disabled = false
                tarjetasDestapas = 0
            },500)
        }
    }
    
}