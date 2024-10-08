// Obtener el elemento del reloj y el de la pista
const clockElement = document.getElementById('clock');
const pistaElement = document.getElementById('pista');

// Función para actualizar el reloj
function actualizarReloj() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // Añadir ceros a la izquierda si es necesario
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Actualizar el reloj en pantalla
    clockElement.innerHTML = `${horas}:${minutos}:${segundos}`;

    // Comprobar si es la hora exacta para revelar la pista
    if (horas == '03' && minutos == '00' && segundos == '00') {
        mostrarPista();
    }
}

// Función para mostrar la pista
function mostrarPista() {
    pistaElement.style.display = 'block';
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);
