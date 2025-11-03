// Crear la ventana (leaflet-control-window)
var win = L.control.window(map, {
  modal: false,
});

// Tabla reutilizable
function row(label, value) {
  return `
    <tr>
      <td><b>${label}</b></td>
      <td>${value || "-"}</td>
    </tr>`;
}

// Buscar la feature con general = 1
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

// Generar tabla resumen
function tablaResumenCapa(layerGroup, nombreCapa) {
  const featureGeneral = obtenerFeatureGeneral(layerGroup);

  const p = featureGeneral.properties;

  return `
    <h2>${nombreCapa.toUpperCase()}</h2>
    <table class='detalle'>
      <tbody>
        ${row("ACTUACIÓN", p.actuacion)}
        ${row("MÁS INFORMACIÓN", p.masinfo)}
        ${row("VAL. DAÑOS", p.val_dany)}
        ${row("SUBVENCIÓN", p.subv_apro)}
        ${row("FECHA PREVISTA", p.fecha_prev)}
        ${row("ENLACE", '<a href="' + p.enlace + '">Ver enlace</a>')}
      </tbody>
    </table>
    <br/>
    <h3>Haz click sobre cada elemento para obtener información de detalle</h3>
  `;
}

// Detectar capa activa
function detectarCapaActiva() {
  const capas = [
    { nombre: "Alcantarillado", layer: alcantarilladoLayer },
    { nombre: "Contenedores", layer: contenedoresLayer },
    { nombre: "Deportivas", layer: deportivasLayer },
    { nombre: "Eléctricas", layer: electricasLayer },
    { nombre: "Red de riegos", layer: riegoLayer },
    { nombre: "Parking Plaça Major", layer: parkingLayer },
    { nombre: "Plazas, parques y jardines", layer: plazasParquesJardinesLayer },
    { nombre: "Villa romana", layer: villaRomanaLayer },
    { nombre: "Centros educativos", layer: centroEducativoLayer },
    { nombre: "Centos culturales", layer: centroCulturalLayer },
    { nombre: "Centros sociosanitarios", layer: centroSocioLayer },
    { nombre: "Megafonía", layer: megafoniaLayer },
  ];

  return capas.find((c) => map.hasLayer(c.layer));
}

// Capas excluidas del wincontrol
const capasExcluidas = [
  "Deportivas",
  "Parking Plaça Major",
  "Plazas, parques y jardines",
  "Villa romana",
  "Centros educativos",
  "Centros culturales",
  "Centros sociosanitarios",
];

map.on("baselayerchange", function (e) {
  const capaActiva = detectarCapaActiva();

  // Si detectamos la capa y está en las excluidas → cerrar ventana y salir
  if (capaActiva && capasExcluidas.includes(capaActiva.nombre)) {
    const winAbierto =
      document.querySelector(".leaflet-control-window.visible") !== null;
    if (winAbierto) win.hide();
    return;
  }

  // Si no hay capa activa → mostrar mensaje SOLO si NO es excluida
  if (!capaActiva) {
    win.content("<p>No existe información sobre la capa seleccionada</p>");
    win.show();
    return;
  }

  // Si la capa es válida → mostrar ventana normal
  const contenidoWin = tablaResumenCapa(capaActiva.layer, capaActiva.nombre);
  win.content(contenidoWin);
  win.show();
});
