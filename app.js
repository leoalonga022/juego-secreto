let númeroSecreto = 0;
let intentos = 0; 
let listaNumerosSorteados = [];
let númeroMaximo = 10; 

console.log(númeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let númeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (númeroDeUsuario === númeroSecreto) {
        asignarTextoElemento('p',`Acertarte el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (númeroDeUsuario > númeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else { 
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++; 
        limpiarCaja();
    } 
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; 

}

function generarNúmeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*númeroMaximo)+1; 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados); 
    //Si ya sorteamos todos los números 
    if (listaNumerosSorteados.length == númeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles'); 

    } else {
        //Si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNúmeroSecreto(); 
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número de 1 al ${númeroMaximo}`);
    númeroSecreto = generarNúmeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar msj de intervalo de números 
    //Generar numero aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshhabilitar buton nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled', 'true'); 
}


condicionesIniciales();