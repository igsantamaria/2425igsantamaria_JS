// funciones.js

// Función para cambiar el texto del párrafo
function cambiarMensaje() {
    // Obtiene el elemento con el id "mensaje" y cambia su contenido
    document.getElementById("mensaje").innerHTML = "¡El mensaje ha sido cambiado!";
}

// Función para validar el formulario
function validarFormulario() {
    // Obtiene el valor del campo "nombre"
    var nombre = document.getElementById("nombre").value;

    // Si el nombre está vacío, muestra un mensaje y previene el envío del formulario
    if (nombre === "") {
        alert("El campo nombre no puede estar vacío.");
        return false; // Esto impide que el formulario se envíe
    }

    // Si el nombre no está vacío, muestra un mensaje de éxito y permite el envío
    alert("Formulario enviado correctamente. Gracias, " + nombre + "!");
    return true;
}

// Función para cambiar el color de fondo de la página
function cambiarColorFondo() {
    // Pide al usuario un color para el fondo
    var color = prompt("Introduce un color para el fondo (por ejemplo: 'red', 'blue', '#ff5733'):");
    
    // Cambia el color de fondo del body de la página
    document.body.style.backgroundColor = color;
}
