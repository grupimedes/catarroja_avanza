// Función genérica para obtener el campo

function getProp(feature, propName, label = null) {
  // Valor seguro y limpio
  const rawValue = feature?.properties?.[propName]?.toString().trim() || "";
  if (!rawValue) return ""; // 🔹 Oculta fila si no hay valor

  // Detectar si el valor parece un enlace
  const isLink = /^https?:\/\//i.test(rawValue);
  const value = isLink
    ? `<a href="${rawValue}" target="_blank" rel="noopener noreferrer">Ver enlace</a>`
    : rawValue;

  // Etiqueta legible (propName en mayúsculas si no se pasa otra)
  const labelText = label || propName.toUpperCase();

  // Devolver la fila HTML
  return `
    <tr>
      <td><b>${labelText}</b></td>
      <td>${value}</td>
    </tr>
  `;
}
