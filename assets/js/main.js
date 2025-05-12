// Simulamos los datos que normalmente vendrían de un archivo JSON externo o de una API
const datos = {
  "datos": [
    {
      "id_arbol": "ARBOL_001",
      "temp": -143.88,
      "lat": 20.46879,
      "lon": -97.71613,
      "date": "2025-05-05",
      "time": "12:30:45",
      "altura": -1052562
    },
    {
      "id_arbol": "ARBOL_002",
      "temp": -143.88,
      "lat": 20.46878,
      "lon": -97.71615,
      "date": "2025-05-05",
      "time": "12:30:45",
      "altura": -1052889
    },
    {
      "id_arbol": "ARBOL_001",
      "temp": -143.88,
      "lat": 20.46875,
      "lon": -97.71619,
      "date": "2025-05-05",
      "time": "12:30:45",
      "altura": -1053275
    }
  ]
};

// Obtener el contenedor desde el DOM
const contenedor = document.getElementById("contenedor-cards");

// Agrupar por árbol y conservar solo el último dato (última posición del array)
const agrupados = {};
datos.datos.forEach((dato) => {
  agrupados[dato.id_arbol] = dato; // se sobrescriben los repetidos, quedando el último
});

// Crear las tarjetas dinámicamente
Object.values(agrupados).forEach(dato => {
  const card = document.createElement("div");
  card.className = "col-md-4";

  card.innerHTML = `
    <div class="card shadow-sm mb-4">
      <div class="card-header bg-success text-white">
        <h5 class="mb-0">${dato.id_arbol}</h5>
      </div>
      <div class="card-body">
        <p><strong>Altura:</strong> ${dato.altura} m</p>
        <p><strong>GPS:</strong> ${dato.lat}, ${dato.lon}</p>
        <p><strong>Fecha:</strong> ${dato.date}</p>
        <p><strong>Hora:</strong> ${dato.time}</p>
      </div>
    </div>
  `;
  contenedor.appendChild(card);
});
