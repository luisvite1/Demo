

document.addEventListener("DOMContentLoaded", function () {
    var tiempoRestante = 20;
    var intervalo;

    var detenerBoton = document.getElementById("detenerBoton");
    detenerBoton.addEventListener("click", detenerContador);

    function iniciarContador() {
        intervalo = setInterval(function () {
            document.getElementById("tiempo").textContent = tiempoRestante;
            tiempoRestante--;

            if (tiempoRestante < 0) {
                clearInterval(intervalo); // Detiene el contador
                mostrarMensaje();
            }
        }, 1000); 
    }

    function mostrarMensaje() {
        var mensaje = document.createElement("div");
        alert( "Se acabó el tiempo. Redirigiendo a la página principal...");
        document.body.appendChild(mensaje);

        setTimeout(function () {
            window.location.href = "menu.html"; 
        }, 2000); 
    }

    function detenerContador() {
        clearInterval(intervalo);
        alert("Contador detenido, checa tus repuestas correctas!!");
    }

    iniciarContador(); // Iniciar el contador al cargar la página
});

