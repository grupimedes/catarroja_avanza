// Función genérica para obtener el campo

function getProp(feature, propName) {
  return feature?.properties?.[propName] ?? " ";
}

// Alias específicos

const infoTitulo = (f) => getProp(f, "titulo");
const infoDireccion = (f) => getProp(f, "direccion");
const infoActuacion = (f) => getProp(f, "actuacion");
const infoObjeto = (f) => getProp(f, "objeto");
const infoValoracion = (f) => getProp(f, "val_dany");
const infoSubvencion = (f) => getProp(f, "subv_apro");
const infoEstado = (f) => getProp(f, "estado_d");

// Función específica para los enlaces

function infoEnlace(feature) {
  if (feature.properties.enlace == null) {
    return " ";
  } else {
    return (
      '<a target=_blank href="' +
      feature.properties.enlace +
      '">Memoria técnica</a>'
    );
  }
}
