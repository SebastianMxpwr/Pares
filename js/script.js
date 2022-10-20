let tarjetasDestapas = 0
let tarjeta1 = null
let tarjeta2 = null
let primerResultado = null
let segundoResultado = null

let pares = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
pares = pares.sort(()=>{return Math.random() -0.5})
console.log(pares);

//funcion principal
function destapar(id){
    tarjetasDestapas ++
    console.log(tarjetasDestapas);
    if(tarjetasDestapas == 1){
        tarjeta1 = document.getElementById(id)
        primerResultado = pares[id]
        tarjeta1.innerHTML = primerResultado
        tarjeta1.disabled = true
    }else if(tarjetasDestapas == 2){
        tarjeta2 = document.getElementById(id)
        segundoResultado = pares[id]
        tarjeta2.innerHTML = segundoResultado
        tarjeta2.disabled = true
        
        setTimeout(()=>{
            tarjetasDestapas = 0
            tarjeta1.innerHTML = null
            tarjeta2.innerHTML = null
            tarjeta1.disabled = false
            tarjeta2.disabled = false
        },1000)
    }
    
}