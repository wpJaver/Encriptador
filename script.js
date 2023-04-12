var letras_encriptar = {
  a: "enter",
  e: "imes",
  i: "ai",
  o: "ober",
  u: "ufat",
};
var letras_desencriptar = {
  enter: "a",
  imes: "e",
  ai: "i",
  ober: "o",
  ufat: "u",
};
var boton_encriptar = document.querySelector("#encriptar");
const contenedor_aside = document.querySelector(".aside-sin-texto");
const contenedor_texto = document.querySelector(".aside-box");
const contenedor_boton = document.querySelector(".boton-aside");
const p = document.querySelector(".aside-con-texto-oculto");
p.classList.add("ocultar");
function mostrar_resultado() {
  contenedor_aside.classList.add("ocultar");
  p.classList.remove("ocultar");
  contenedor_texto.classList.add(".aside-box");
  contenedor_texto.classList.add(".aside-box:focus");
  contenedor_boton.classList.add(".boton-aside");
}

function encriptar_texto() {
  let mensaje = document.getElementById("mytexto").value;
  let nuevo_mensaje = "";

  if (mensaje != "") {
    for (let i = 0; i < mensaje.length; i++) {
      if (letras_encriptar[mensaje[i]] != null)
        nuevo_mensaje += letras_encriptar[mensaje[i]];
      else nuevo_mensaje += mensaje[i];
    }
    mostrar_resultado();
    contenedor_texto.value = nuevo_mensaje;
  }
}
function desencriptar_texto() {
  let palabras = ["enter", "imes", "ai", "ober", "ufat"];
  let mensaje = document.getElementById("mytexto").value;
  let nuevo_mensaje = "";
  let k = 0;
  if (mensaje != "") {
    var mensaje_desencriptado = mensaje.replace(
      new RegExp(palabras.join("|"), "gi"),
      (val) => letras_desencriptar[val]
    );
    mostrar_resultado();
    contenedor_texto.value = mensaje_desencriptado;
  }
}
