const prompt = require('prompt-sync')();
function Factorial(num){
    let resultado=1;
    if(isNaN(num)){
        return "Por favor ingrese un número entero";        
    }else if (num<0){
        return "No es posible calcular factoriales negativos";
    }else{
        for(let i = 1; i<=num; i++){
            resultado *=i; 
        }
    }
    return resultado;
}

let num = parseInt(prompt("Ingrese un número entero: "));
let mensaje = Factorial(num);
typeof mensaje === "string" ? console.log(mensaje) : console.log("El factorial de "+ num + " es: "+ mensaje);
