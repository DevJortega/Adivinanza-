// Variables
let numerodeIntentos = 4;
let numeroAleatorio = Math.floor(Math.random() * 10);
const botonComprobar = document.querySelector('#botonComprobar');
const botonReiniciar = document.querySelector('#botonReiniciar');
const intentos = document.querySelector('#intentos');
const mensaje = document.querySelector('#mensaje');
const input = document.querySelector('#numero');
const perdiste = document.querySelector('#perdiste');


// Eventos
botonComprobar.addEventListener('click', () => {
    const numero = parseInt(input.value, 10); // parseInt convierte el valor a un número entero
    if (numero>10 || numero<0) {
        mensaje.textContent = 'El número debe ser entre 0 y 10';
        mensaje.style.color = 'red'; // Cambia el color del texto a rojo
    }
    else {
        mensaje.textContent = '';
        comprobarNumero(numero, numeroAleatorio);
    }
});


botonReiniciar.addEventListener('click', () => {
    reiniciarJuego();
});


// Funciones
function comprobarNumero(numero, numeroAleatorio) {
    if (numero === numeroAleatorio) {
        mensaje.textContent = 'Felicidades, ganaste';
        mensaje.style.color = 'green'; // Cambia el color del texto a verde
        botonComprobar.disabled = true;
        botonComprobar.classList.remove('bg-blue-800');
        botonComprobar.classList.add('bg-green-500'); // Cambiar el color del botón a gris
    } else if (numero > numeroAleatorio) {
        --numerodeIntentos;
        evaluarIntentos('El número es menor');
    } else if (numero < numeroAleatorio) {
        --numerodeIntentos;
        evaluarIntentos('El número es mayor');
    }
}

function evaluarIntentos(message) {
    intentos.textContent = `Intentos: ${numerodeIntentos}`;
    mensaje.textContent = message;

    if (numerodeIntentos === 0 && numeroAleatorio!==numero) {
        mensaje.textContent = '¡Te has quedado sin intentos!';
        mensaje.style.color = 'red';
        perdiste.textContent = `El número era: ${numeroAleatorio}`;
        botonComprobar.disabled = true; // Desactivar el botón
        botonComprobar.classList.remove('bg-blue-800');
        botonComprobar.classList.add('bg-gray-500'); // Cambiar el color del botón a gris
    }
}

function reiniciarJuego() {
    numerodeIntentos = 4;
    numeroAleatorio = Math.floor(Math.random() * 10); // Generar un nuevo número aleatorio
    intentos.textContent = `Intentos: ${numerodeIntentos}`;
    mensaje.textContent = '';
    botonComprobar.disabled = false;
    botonComprobar.classList.remove('bg-gray-500');
    botonComprobar.classList.add('bg-blue-800'); // Restaurar el color del botón a azul
    input.value = '';
    perdiste.textContent = '';
}