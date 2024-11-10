
    alert("¡Hola, bienvenido a Hongi Etorri!");

    document.body.style.backgroundColor = "lightblue";

 
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            const resultado = sumarNumeros(num1, num2);
            document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

