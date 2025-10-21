// Funciones para los popups

function infoActuacion(feature) {
  if (feature.properties.actuacion == null) {
    return " ";
  } else {
    return feature.properties.actuacion;
  }
}

function infoComentario(feature) {
  if (feature.properties.comentario == null) {
    return " ";
  } else {
    return feature.properties.comentario;
  }
}

function infoEnlace(feature) {
  if (feature.properties.enlace == null) {
    return " ";
  } else {
    return feature.properties.enlace;
  }
}
