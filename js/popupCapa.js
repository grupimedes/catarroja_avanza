// Crear la ventana (leaflet-control-window)
var win = L.control.window(map, {
  title: "Capa base",
  content: "",
  modal: false,
});

// Función para generar filas de tabla
function row(label, value) {
  return `
    <tr>
      <td style="font-weight:bold; padding:4px;">${label}</td>
      <td style="padding:4px;">${value}</td>
    </tr>`;
}

// Escuchar el cambio de capa base
map.on("baselayerchange", function (e) {
  // Crear contenido HTML como tabla
  const tablaHTML = `
    <h3 style="margin-top:0;">Información de la capa</h3>
    <table class="detalle" border="1" cellspacing="0" cellpadding="3" style="border-collapse:collapse; width:100%;">
      <tbody>
        ${row("Nombre", e.name)}
        ${row(
          "Fuente",
          e.name === "Mapa base OSM" ? "OpenStreetMap" : "ESRI World Imagery"
        )}
        ${row(
          "Tipo",
          e.name === "Mapa base OSM" ? "Vectorial" : "Imagen satélite"
        )}
        ${row(
          "Año",
          e.name === "Mapa base OSM"
            ? "Actualizado constantemente"
            : "Variable según cobertura"
        )}
      </tbody>
    </table>
  `;

  // Actualizar título y contenido
  win.title("Detalles de la capa base");
  win.content(tablaHTML);
  win.show();
});
