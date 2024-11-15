// Función para la index mensaje 
function indexFuncion() {
    console.log("https://igsantamaria.github.io/2425igsantamaria_JS/index.html");
    alert("¡Hola, bienvenido a Hongi Etorri!");
}

// Función para la página 1 cambio color fondo
function pagina1JSFuncion() {
    console.log("https://igsantamaria.github.io/2425igsantamaria_JS/pagina1JS.html");
    document.body.style.backgroundColor = "lightpink";
}

// Función para la página 2 cambio color letra
function pagina2JSFuncion() {
    console.log("https://igsantamaria.github.io/2425igsantamaria_JS/pagina2JS.html");
   document.body.style.color = 'red'; 
}

// Función para la página 3 cambio color fondo y tipo de letra
function pagina3JSFuncion() {
    console.log("https://igsantamaria.github.io/2425igsantamaria_JS/pagina3JS.html");
    document.body.style.fontFamily = "Courier";
}


// Función para la página 4 cambia tamaño letra
function pagina4JSFuncion() {
    console.log("https://igsantamaria.github.io/2425igsantamaria_JS/pagina4JS.html");
    document.body.style.fontSize = '38px';
    
}



// Verifica qué página está cargada y ejecuta la función correspondiente
document.addEventListener("DOMContentLoaded", function() {
    // Compara el pathname relativo, no la URL completa
    const pathname = window.location.pathname;

    if (pathname.includes("index.html")) {
        indexFuncion();
    } else if (pathname.includes("pagina1JS.html")) {
        pagina1JSFuncion();
    } else if (pathname.includes("pagina2JS.html")) {
        pagina2JSFuncion();
    } else if (pathname.includes("pagina3JS.html")) {
        pagina3JSFuncion();
    } else if (pathname.includes("pagina4JS.html")) {
        pagina4JSFuncion();
    } else {
        console.log("Página no encontrada");
    }
});
