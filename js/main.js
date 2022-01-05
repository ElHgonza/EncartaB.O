/////////DETECTAR_NAVEGADOR///////////
var sBrowser,
  sUsrAg = navigator.userAgent;

if (sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("like Gecko") > -1) {
  sBrowser = "Nevegador Viejo";
  alert("¡¡¡Navegador obsoleto, usa Edge!!!");
} else if (sUsrAg.indexOf("Trident") > -1) {
  sBrowser = "Nevegador Viejo";
  alert("¡¡¡Navegador obsoleto, usa Edge!!!");
}

/////////BOTONES_LINKS///////////

document.getElementById("links_fijo").style.display = "none";
document.getElementById("links_moviles").style.display = "none";
document.getElementById("links_generales").style.display = "none";

function mostrarFijo() {
  document.getElementById("links_fijo").style.display = "block";
  document.getElementById("links_moviles").style.display = "none";
  document.getElementById("links_generales").style.display = "none";
  document.getElementById("selcciona_link").style.display = "none";

  document.getElementById("mostrarFijo").style.background = "red";
  document.getElementById("mostrarFijo").style.color = "white";

  document.getElementById("mostrarMoviles").style.background = "transparent";
  document.getElementById("mostrarMoviles").style.color = "red";

  document.getElementById("mostrarGenerales").style.background = "transparent";
  document.getElementById("mostrarGenerales").style.color = "red";
}

function mostrarMoviles() {
  document.getElementById("links_fijo").style.display = "none";
  document.getElementById("links_moviles").style.display = "block";
  document.getElementById("links_generales").style.display = "none";
  document.getElementById("selcciona_link").style.display = "none";

  document.getElementById("mostrarFijo").style.background = "transparent";
  document.getElementById("mostrarFijo").style.color = "red";

  document.getElementById("mostrarMoviles").style.background = "red";
  document.getElementById("mostrarMoviles").style.color = "white";

  document.getElementById("mostrarGenerales").style.background = "transparent";
  document.getElementById("mostrarGenerales").style.color = "red";
}

function mostrarGenerales() {
  document.getElementById("links_fijo").style.display = "none";
  document.getElementById("links_moviles").style.display = "none";
  document.getElementById("links_generales").style.display = "block";
  document.getElementById("selcciona_link").style.display = "none";

  document.getElementById("mostrarFijo").style.background = "transparent";
  document.getElementById("mostrarFijo").style.color = "red";

  document.getElementById("mostrarMoviles").style.background = "transparent";
  document.getElementById("mostrarMoviles").style.color = "red";

  document.getElementById("mostrarGenerales").style.background = "red";
  document.getElementById("mostrarGenerales").style.color = "white";
}
