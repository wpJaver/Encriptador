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
function encriptar_texto() {
  let mensaje = document.getElementById("mytexto").value;
  let nuevo_mensaje = "";
  if (mensaje != "") {
    for (let i = 0; i < mensaje.length; i++) {
      if (letras_encriptar[mensaje[i]] != null)
        nuevo_mensaje += letras_encriptar[mensaje[i]];
      else nuevo_mensaje += mensaje[i];
    }
    console.log(nuevo_mensaje);
  }
}
function desencriptar_texto() {
  let palabras = ["enter", "imes", "ai", "ober", "ufat"];
  let mensaje = document.getElementById("mytexto").value;
  let nuevo_mensaje = "";
  let k = 0;
  if (mensaje != "") {
    var p = mensaje.replace(
      new RegExp(palabras.join("|"), "gi"),
      (val) => letras_desencriptar[val]
    );
    console.log(p);
  }
}
