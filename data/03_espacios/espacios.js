var espacios = {
  type: "FeatureCollection",
  name: "espacios",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: [
    {
      type: "Feature",
      properties: {
        id: 1,
        direccion: "C. Sant Vicent Ferrer, 1C, 46470 València",
        tipologia: "Villa Romana",
        nom: "Vil·la Romana l'Hort de Pepica",
        estado: "Prevista",
        actuacion:
          "Pdte Encargo   TRAGASET: Asistencias técnicas    TRAGSA: Obra",
        comentario: null,
        enlace:
          "https://www.catarroja.es/sites/www.catarroja.es/files/documents/Catarroja/PorTemas/PLA-RECUPERACIO/AVALUACIO/memoria_TMD_Hort_de_Pepica.pdf",
      },
      geometry: {
        type: "Point",
        coordinates: [-0.408293129099695, 39.408432706798727],
      },
    },
  ],
};
