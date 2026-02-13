const webAppURL = "TU_URL_WEBAPP"; // pega tu URL de Apps Script

// Registrar socio
document.getElementById("formRegistro").addEventListener("submit", async (e) => {
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

  const res = await fetch(webAppURL, {
    method: "POST",
    body: JSON.stringify({ action: "registrarSocio", socio })
  });

  const data = await res.json();
  const mensaje = document.getElementById("mensajeRegistro");
  mensaje.textContent = data.message;
});

// Buscar socio
document.getElementById("btnBuscar").addEventListener("click", async () => {
  const numero = document.getElementById("buscarNumero").value;
  const res = await fetch(`${webAppURL}?numero=${numero}`);
  const socio = await res.json();

  const div = document.getElementById("resultado");
  if (socio && !socio.success) {
    div.innerHTML = socio.message;
  } else {
    div.innerHTML = `
      <strong>Nombre:</strong> ${socio.nombre}<br>
      <strong>Teléfono:</strong> ${socio.telefono}<br>
      <strong>Fecha Pago:</strong> ${new Date(socio.fechaPago).toLocaleDateString()}<br>
      <strong>Duración:</strong> ${socio.duracion} días<br>
      <strong>Promoción:</strong> ${socio.promocion}<br>
      <img src="${socio.fotoURL}" alt="Foto del socio">
    `;
  }
});
