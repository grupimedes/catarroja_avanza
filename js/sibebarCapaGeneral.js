const sidebar = L.control
  .sidebar({
    autopan: true,
    container: "sidebar",
    position: "left",
  })
  .addTo(map);

// === Helpers ===

// Solo genera la fila si existe valor (no vacío, null, undefined o '-')
function row(label, value) {
  // Limpia el valor (por si llega como string vacío o nulo)
  if (
    value === null ||
    value === undefined ||
    value === "" ||
    value === "-" ||
    value === "null" ||
    value === "undefined"
  ) {
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
    return `<h2>${nombreCapa.toUpperCase()}</h2><p>No hay información general disponible.</p>`;
  }

  const p = featureGeneral.properties;

  // Creamos un array con todas las filas posibles
  const filas = [
    row("ACTUACIÓN", p.actuacion),
    row("MÁS INFORMACIÓN", p.masinfo),
    row("VAL. DAÑOS", p.val_dany),
    row("SUBVENCIÓN", p.subv_apro),
    row("FECHA PREVISTA", p.fecha_prev),
    row(
      "ENLACE",
      p.enlace ? `<a href="${p.enlace}" target="_blank">Ver enlace</a>` : ""
    ),
    row(
      "ENLACE 2",
      p.enlace_2 ? `<a href="${p.enlace_2}" target="_blank">Ver enlace</a>` : ""
    ),
  ]
    // Elimina las filas vacías
    .filter((f) => f.trim() !== "")
    .join("");

  // Si no hay ninguna fila, muestra un mensaje simple
  const contenidoTabla =
    filas.trim() !== ""
      ? `<table class='detalle'><tbody>${filas}</tbody></table>`
      : `<p>No hay información disponible.</p>`;

  return `
    <br/><h2>${p.titulo || nombreCapa.toUpperCase()}</h2>
    ${contenidoTabla}
    <br/>
    <h3 style='text-align:center'>Haz click sobre cada elemento para obtener información de detalle</h3>
  `;
}

// === Detectar capa activa ===
function detectarCapaActiva() {
  const capas = [
    { nombre: "Alcantarillado", layer: alcantarilladoLayer },
    { nombre: "Contenedores", layer: contenedoresLayer },
    { nombre: "Reurbanización", layer: reurbanizacionLayer },
    { nombre: "Deportivas", layer: deportivasLayer },
    { nombre: "Eléctricas", layer: electricasLayer },
    { nombre: "Red de riegos", layer: riegoLayer },
    { nombre: "Parking Plaça Major", layer: parkingLayer },
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

// === Capas excluidas de mostrar resumen ===
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

  if (capaActiva && capasExcluidas.includes(capaActiva.nombre)) {
    sidebar.close();
    return;
  }

  if (!capaActiva) {
    const panel = document.createElement("div");
    panel.className = "leaflet-sidebar-pane";
    panel.innerHTML = `<p>No existe información sobre la capa seleccionada</p>`;
    sidebar.addPanel({
      id: "tabla",
      tab: '<i class="fa fa-info"></i>',
      pane: panel,
      title: "Información",
      position: "top",
    });
    sidebar.open("tabla");
    return;
  }

  const contenido = tablaResumenCapa(capaActiva.layer, capaActiva.nombre);
  const panel = document.createElement("div");
  panel.className = "leaflet-sidebar-pane";

  const header = document.createElement("h1");
  header.className = "leaflet-sidebar-header";
  header.innerHTML =
    capaActiva.nombre.toUpperCase() +
    '<span class="leaflet-sidebar-close"><i class="fa fa-times"></i></span>';
  panel.appendChild(header);

  const tabla = document.createElement("div");
  tabla.innerHTML = contenido;
  panel.appendChild(tabla);

  sidebar.addPanel({
    id: "tabla",
    tab: '<i class="fa fa-info"></i>',
    pane: panel,
    title: "Resumen general",
    position: "top",
  });
  sidebar.open("tabla");
});
