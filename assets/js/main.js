// === PREVISUALIZAR ARCHIVO LOCAL ANTES DE GUARDAR ===
document.getElementById("btn-preview").addEventListener("click", () => {
  const archivoInput = document.getElementById("archivo-json");
  const archivo = archivoInput.files[0];

  if (!archivo) {
    Swal.fire("No hay archivo", "Selecciona un archivo para visualizarlo", "warning");
    return;
  }

  const lector = new FileReader();

  lector.onload = function (e) {
    try {
      const contenido = JSON.parse(e.target.result);
      mostrarTarjetasDesdeJSON(contenido);
    } catch (error) {
      Swal.fire("Error", "El archivo no tiene formato JSON válido", "error");
    }
  };

  lector.readAsText(archivo);
});


// === CARGAR DESDE BACKEND ===
document.getElementById("btn-cargar").addEventListener("click", () => {
  fetch("backend/leer-archivos.php")
    .then(res => res.json())
    .then(json => mostrarTarjetasDesdeJSON(json))
    .catch(() => {
      Swal.fire("Error", "No se pudo cargar el archivo", "error");
    });
});


// === GUARDAR ARCHIVO EN SERVIDOR ===
document.getElementById("form-subir").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("backend/guardar-archivos.php", {
    method: "POST",
    body: formData,
  })
    .then(res => res.text())
    .then(mensaje => {
      Swal.fire("Guardado", mensaje || "Archivo guardado correctamente", "success");
      this.reset();
    })
    .catch(() => {
      Swal.fire("Error", "No se pudo guardar el archivo", "error");
    });
});


// === FUNCION GENERAL PARA MOSTRAR LAS TARJETAS ===
function mostrarTarjetasDesdeJSON(data) {
  const contenedor = document.getElementById("contenedor-arboles");
  contenedor.innerHTML = "";

  const arboles = data.datos || [];

  if (!Array.isArray(arboles) || arboles.length === 0) {
    contenedor.innerHTML = `<div class="text-center text-muted">No hay árboles para mostrar.</div>`;
    return;
  }

  arboles.forEach((objeto, index) => {
    const card = `
      <div class="col-md-4 mb-3">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Árbol ${index + 1}</h5>
            <p class="card-text"><strong>ID:</strong> ${objeto.id_arbol ?? "N/A"}</p>
            <p class="card-text"><strong>Temperatura:</strong> ${objeto.temp ?? "N/A"}</p>
            <p class="card-text"><strong>Altura:</strong> ${objeto.altura ?? "N/A"}</p>
            <p class="card-text"><strong>Latitud:</strong> ${objeto.lat ?? "N/A"}</p>
            <p class="card-text"><strong>Longitud:</strong> ${objeto.lon ?? "N/A"}</p>
            <p class="card-text"><strong>Fecha:</strong> ${objeto.date ?? "N/A"}</p>
            <p class="card-text"><strong>Hora:</strong> ${objeto.time ?? "N/A"}</p>
          </div>
        </div>
      </div>`;
    contenedor.innerHTML += card;
  });
}
