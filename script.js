let numeroIngresado = document.getElementById('numero');
let pMensaje = document.getElementById('mensaje')
const btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', function(){
    Factorial(numeroIngresado.value);
});


function Factorial(numeroIngresado){
    let numero = parseInt(numeroIngresado);
    console.log(numero);
    let resultado = 1;
    if(isNaN(numero)){
        pMensaje.innerText = "Por favor ingrse un número entero";
    }else if(numero<0){
        pMensaje.innerText = "No se puede calcular el factorial de un número negativo"
    }else{
        for(let i=1;i<=numero;i++){
            resultado*=i;
        }
        pMensaje.innerText = "El factorial de " + numero + " es: " + resultado;
    }
}