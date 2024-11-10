// Función para la index
function indexFuncion() {
    console.log("https://igsantamaria.github.io/2425igsantamaria_JS/index.html");
    alert("¡Hola, bienvenido a Hongi Etorri!");
}

// Función para la página 1
function pagina1PSFuncion() {
    console.log("https://igsantamaria.github.io/2425igsantamaria_JS/pagina1PS.html");
    document.body.style.backgroundColor = "lightgreen";
}

// Función para la página 2
function pagina2PSFuncion() {
    console.log("https://igsantamaria.github.io/2425igsantamaria_JS/pagina2PS.html");
    document.body.style.backgroundColor = "lightblue";
}

// Función para la página 3
function pagina3PSFuncion() {
    console.log("https://igsantamaria.github.io/2425igsantamaria_JS/pagina3PS.html");
    document.body.style.backgroundColor = "lightcoral";
}

// Función para la página 4
function pagina4PSFuncion() {
    console.log("https://igsantamaria.github.io/2425igsantamaria_JS/pagina4PS.html");
    document.body.style.backgroundColor = "lightgoldenrodyellow";
}

// Verifica qué página está cargada y ejecuta la función correspondiente
document.addEventListener("DOMContentLoaded", function() {
    // Compara el pathname relativo, no la URL completa
    const pathname = window.location.pathname;

    if (pathname.includes("index.html")) {
        indexFuncion();
    } else if (pathname.includes("pagina1PS.html")) {
        pagina1PSFuncion();
    } else if (pathname.includes("pagina2PS.html")) {
        pagina2PSFuncion();
    } else if (pathname.includes("pagina3PS.html")) {
        pagina3PSFuncion();
    } else if (pathname.includes("pagina4PS.html")) {
        pagina4PSFuncion();
    } else {
        console.log("Página no encontrada");
    }
});
