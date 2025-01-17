const miTitulo = document.querySelector("h1");
miTitulo.textContent = "¡Hola mundo!";

let nombreDeLaVariable = "Bob";
nombreDeLaVariable = "Steve";

// Esto es un comentario

let helado = "avellana";
if (helado === "chocolate"){
    //alert("¡Sí, amo el helado de chocolate!");
}else {
    //alert("Awwww, pero mi favorito es el de chocolate...");
}

function multiplica(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
  }

//alert("El resultado de multiplicar 5 * 5 es: " + multiplica(5,5));

document.querySelector("h1").onclick = function () {
    alert("¡Ouch! ¡Deja de pincharme!");
  };

let miImage = document.querySelector("img");
miImage.onclick = function(){
    let miSrc = miImage.getAttribute("src");
    if (miSrc == "imagenes/firefox-icon.png"){
        miImage.setAttribute("src", "imagenes/firefox2.png");
    } else{
        miImage.setAttribute("src", "imagenes/firefox-icon.png")
    }
};

let miBoton = document.querySelector("button");
let mititulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem("nombre", miNombre);
      miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
    }
  }
  
  
miBoton.onclick = function () {
    estableceNombreUsuario();
};

