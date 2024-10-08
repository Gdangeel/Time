// Obtener el elemento del reloj y el botón
const clockElement = document.getElementById('clock');
const esperaElement = document.getElementById('espera'); // Nuevo elemento de espera
const unlockButton = document.getElementById('unlockButton'); // Botón para desbloquear

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
    if (horas == '15' && minutos == '35' && segundos == '00') {
        mostrarBotonDesbloquear();
    }
}

// Función para mostrar el botón de desbloqueo
function mostrarBotonDesbloquear() {
    esperaElement.style.display = 'none';  // Ocultar el mensaje de espera
    unlockButton.style.display = 'block';  // Mostrar el botón de desbloquear
}

// Función para mostrar y reproducir el video
function mostrarPista() {
    // Crear el elemento de video dinámicamente
    const pistaVideoElement = document.createElement('video');
    pistaVideoElement.width = 640;
    pistaVideoElement.height = 360;
    pistaVideoElement.controls = true; // Habilitar controles del video

    // Crear el elemento source
    const sourceElement = document.createElement('source');
    sourceElement.src = 'tu-video.mp4'; // Ruta del video
    sourceElement.type = 'video/mp4';

    // Agregar el source al video
    pistaVideoElement.appendChild(sourceElement);
    document.body.appendChild(pistaVideoElement); // Agregar el video al body

    // Mostrar el video y reproducirlo automáticamente
    pistaVideoElement.style.display = 'block';  // Mostrar el video
    pistaVideoElement.play();  // Reproducir el video automáticamente
}

// Evento del botón de desbloqueo
unlockButton.addEventListener('click', mostrarPista);

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);
