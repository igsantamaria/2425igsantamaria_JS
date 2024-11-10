
// Función para la index
function indexFuncion() {
    console.log("Función de la página 4");
    alert("¡Hola, bienvenido a Hongi Etorri!")
}

// Función para la página 1
function pagina1PSFuncion() {
    console.log("Función de la página 1");
    document.body.style.backgroundColor = "lightgreen";
}

// Función para la página 2
function pagina2PSFuncion() {
    console.log("Función de la página 2");
    document.body.style.backgroundColor = "lightblue";
}

// Función para la página 3
function pagina3PSFuncion() {
    console.log("Función de la página 3");
    document.body.style.backgroundColor = "lightcoral";
}

// Función para la página 4
function pagina4PSFuncion() {
    console.log("Función de la página 4");
    document.body.style.backgroundColor = "lightgoldenrodyellow";


    // Verifica qué página está cargada y ejecuta la función correspondiente
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("https://igsantamaria.github.io/2425igsantamaria_JS/pagina1PS.html")) {
        pagina1PSFuncion();
    } else if (window.location.pathname.includes("https://igsantamaria.github.io/2425igsantamaria_JS/pagina2PS.html")) {
        pagina2PSFuncion();
    } else if (window.location.pathname.includes("https://igsantamaria.github.io/2425igsantamaria_JS/pagina3PS.html")) {
        pagina3PSFuncion();
    } else if (window.location.pathname.includes("https://igsantamaria.github.io/2425igsantamaria_JS/pagina4PS.html")) {
        pagina4PSFuncion();
    } else if (window.location.pathname.includes("https://igsantamaria.github.io/2425igsantamaria_JS/index.html")) {
        indexFuncion();
});
