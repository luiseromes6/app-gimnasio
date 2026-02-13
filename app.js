document.addEventListener("DOMContentLoaded", () => {

  console.log("APP FUNCIONANDO");

  // REGISTRAR SOCIO
  const formRegistro = document.getElementById("formRegistro");
  const mensajeRegistro = document.getElementById("mensajeRegistro");

  formRegistro.addEventListener("submit", function(e) {
    e.preventDefault();

    mensajeRegistro.textContent = "Registro funcionando ✔";
    console.log("Botón registrar funciona");
  });

  // BUSCAR SOCIO
  const btnBuscar = document.getElementById("btnBuscar");
  const resultado = document.getElementById("resultado");

  btnBuscar.addEventListener("click", function() {
    resultado.textContent = "Búsqueda funcionando ✔";
    console.log("Botón buscar funciona");
  });

});
