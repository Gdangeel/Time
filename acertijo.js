// Obtener el elemento del reloj y el del video
const clockElement = document.getElementById('clock');
const pistaVideoElement = document.getElementById('pistaVideo');

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

    // Comprobar si es la hora exacta (2:57 PM)
    if (horas == '15' && minutos == '14' && segundos == '00') {
        mostrarPista();
    }
}

// Función para mostrar y reproducir el video
function mostrarPista() {
    pistaVideoElement.style.display = 'block';  // Mostrar el video
    pistaVideoElement.play();  // Reproducir el video automáticamente
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);
