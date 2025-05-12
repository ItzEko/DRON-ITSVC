document.addEventListener("DOMContentLoaded", () => {
  const inputArchivo = document.getElementById("archivo-json");
  const contenedor = document.getElementById("contenedor-arboles");

  inputArchivo.addEventListener("change", (e) => {
    const archivo = e.target.files[0];

    if (archivo) {
      const lector = new FileReader();

      lector.onload = function (evento) {
        try {
          const contenido = JSON.parse(evento.target.result);
          mostrarCards(contenido.datos);
        } catch (error) {
          alert("El archivo no contiene un JSON válido.");
        }
      };

      lector.readAsText(archivo);
    }
  });

  function mostrarCards(datos) {
    contenedor.innerHTML = ""; 
    datos.forEach((item) => {
      const card = document.createElement("div");
      card.className = "col-md-6 mb-4";

      card.innerHTML = `
        <div class="card shadow border-success">
          <div class="card-header bg-success text-white">
            <h5 class="mb-0">Árbol ID: ${item.id_arbol}</h5>
          </div>
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-6">
                <h6 class="text-muted">Altura</h6>
                <p class="fs-5">${item.altura} m</p>
              </div>
              <div class="col-md-6">
                <h6 class="text-muted">Localización GPS</h6>
                <p class="fs-5">${item.lat}° N, ${item.lon}° W</p>
              </div>
              <div class="col-md-6">
                <h6 class="text-muted">Fecha</h6>
                <p class="fs-5">${item.date}</p>
              </div>
              <div class="col-md-6">
                <h6 class="text-muted">Hora</h6>
                <p class="fs-5">${item.time}</p>
              </div>
            </div>
          </div>
        </div>
      `;

      contenedor.appendChild(card);
    });
  }
});
