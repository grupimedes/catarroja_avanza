// Sidebar global, conectado al mapa
window.sidebar = L.control
  .sidebar({
    autopan: true,
    container: "sidebar",
    position: "left",
  })
  .addTo(map);

document.addEventListener("click", function (e) {
  const closeBtn = e.target.closest(".leaflet-sidebar-close");
  if (closeBtn) {
    sidebar.close();
  }
});

// === Helpers ===

function row(label, value) {
  if (!value || value === "-" || value === "null" || value === "undefined") {
    return "";
  }

  return `
        <tr>
            <td><b>${label}</b></td>
            <td>${value}</td>
        </tr>`;
}

function obtenerFeatureGeneral(layerGroup) {
  let general = null;

  layerGroup.eachLayer((l) => {
    if (l instanceof L.GeoJSON) {
      l.eachLayer((f) => {
        if (f.feature?.properties?.general === 1) {
          general = f.feature;
        }
      });
    }
  });

  return general;
}

function tablaResumenCapa(layerGroup, nombreCapa) {
  const featureGeneral = obtenerFeatureGeneral(layerGroup);

  if (!featureGeneral) {
    return `<h2>${nombreCapa.toUpperCase()}</h2>
                <p>No hay información general disponible.</p>`;
  }

  const p = featureGeneral.properties;

  const filas = [
    row("ACTUACIÓN", p.actuacion),
    row("MÁS INFORMACIÓN", p.masinfo),
    row("VAL. DAÑOS", p.val_dany),
    row("SUBVENCIÓN", p.subv_apro),
    row("FECHA PREVISTA", p.fecha_prev),
    p.enlace
      ? row("ENLACE", `<a href="${p.enlace}" target="_blank">Ver enlace</a>`)
      : "",
    p.enlace_2
      ? row(
          "ENLACE 2",
          `<a href="${p.enlace_2}" target="_blank">Ver enlace</a>`,
        )
      : "",
  ]
    .filter((x) => x.trim() !== "")
    .join("");

  const contenidoTabla = filas
    ? `<table class="detalle"><tbody>${filas}</tbody></table>`
    : `<p>No hay información disponible.</p>`;

  return `
        <br/><h2>${p.titulo || nombreCapa.toUpperCase()}</h2>
        ${contenidoTabla}
        <br/>
        <h3 style="text-align:center">
            Haz click sobre cada elemento para obtener información de detalle
        </h3>
    `;
}

// Detectar capa activa
function detectarCapaActiva() {
  const capas = [
    { nombre: "Alcantarillado", layer: alcantarilladoLayer },
    { nombre: "Contenedores", layer: contenedoresLayer },
    { nombre: "Reurbanización", layer: reurbanizacionLayer },
    { nombre: "Deportivas", layer: deportivasLayer },
    { nombre: "Instalaciones eléctricas", layer: electricasLayer },
    { nombre: "Alumbrado", layer: alumbradoLayer },
    { nombre: "Red de riegos", layer: riegoLayer },
    { nombre: "Parking Plaça Major", layer: parkingLayer },
    { nombre: "Port de Catarroja", layer: portLayer },
    { nombre: "Plazas, parques y jardines", layer: plazasParquesJardinesLayer },
    { nombre: "Villa romana", layer: villaRomanaLayer },
    { nombre: "Centros educativos", layer: centroEducativoLayer },
    { nombre: "Centros culturales", layer: centroCulturalLayer },
    { nombre: "Centros sociosanitarios", layer: centroSocioLayer },
    { nombre: "Megafonía", layer: megafoniaLayer },
    { nombre: "Centro de emergencias", layer: centroEmergenciasLayer },
  ];

  return capas.find((c) => map.hasLayer(c.layer));
}

// Capas sin resumen
const capasExcluidas = [
  "Reurbanización",
  "Deportivas",
  "Centros educativos",
  "Centros culturales",
  "Centros sociosanitarios",
];

// === Evento principal ===
map.on("baselayerchange", function () {
  const capaActiva = detectarCapaActiva();
  const panel = document.getElementById("tabla");

  // Limpiar siempre el panel
  panel.innerHTML = `
        <h1 class="leaflet-sidebar-header">
            Información general
            <span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>
        </h1>
    `;

  if (capaActiva && capasExcluidas.includes(capaActiva.nombre)) {
    sidebar.close();
    return;
  }

  if (!capaActiva) {
    panel.innerHTML += `<p>No existe información para la capa seleccionada</p>`;
    sidebar.open("tabla");
    return;
  }

  // Contenido dinámico
  const contenido = tablaResumenCapa(capaActiva.layer, capaActiva.nombre);

  const contenedor = document.createElement("div");
  contenedor.innerHTML = contenido;

  panel.appendChild(contenedor);

  sidebar.open("tabla");
});
