document.addEventListener("DOMContentLoaded", () => {

  const API_URL = "https://script.google.com/macros/s/AKfycbxrqBeCGLCwC2G_2lC_jD34yfnvM5gXRYYL1t_CZ_q7C8KayqAJwBzsS24goNPll8Sk/exec"; // pega aquí tu URL de Apps Script

  const formRegistro = document.getElementById("formRegistro");
  const mensajeRegistro = document.getElementById("mensajeRegistro");

  const btnBuscar = document.getElementById("btnBuscar");
  const resultado = document.getElementById("resultado");

  // REGISTRAR SOCIO
  formRegistro.addEventListener("submit", async function(e) {
    e.preventDefault();

    const socio = {
      numero: document.getElementById("numero").value,
      nombre: document.getElementById("nombre").value,
      telefono: document.getElementById("telefono").value,
      fotoURL: document.getElementById("fotoURL").value,
      fechaPago: document.getElementById("fechaPago").value,
      duracion: document.getElementById("duracion").value,
      promocion: document.getElementById("promocion").value
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "registrarSocio",
          socio: socio
        })
      });

      const data = await res.json();
      mensajeRegistro.textContent = data.message;

      if (data.success) formRegistro.reset();

    } catch (error) {
      mensajeRegistro.textContent = "Error al registrar socio";
    }
  });

  // BUSCAR SOCIO
  btnBuscar.addEventListener("click", async function() {
    const numero = document.getElementById("buscarNumero").value;

    try {
      const res = await fetch(API_URL + "?numero=" + numero);
      const data = await res.json();

      if (data.success === false) {
        resultado.textContent = data.message;
        return;
      }

      resultado.innerHTML = `
        <p><b>Número:</b> ${data.numero}</p>
        <p><b>Nombre:</b> ${data.nombre}</p>
        <p><b>Teléfono:</b> ${data.telefono}</p>
        <p><b>Fecha pago:</b> ${data.fechaPago}</p>
        <p><b>Duración:</b> ${data.duracion} días</p>
        <p><b>Promoción:</b> ${data.promocion}</p>
      `;

    } catch (error) {
      resultado.textContent = "Error al buscar socio";
    }
  });

});
