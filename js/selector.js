// Selector capas

var overlayMaps = {
  label: "<b>ÁMBITOS DE INTERVENCIÓN</b>",
  collapsed: false,
  children: [
    {
      label: "<b>01. Vía pública</b>",
      selectAllCheckbox: false,
      collapsed: false,
      children: [
        {
          label: "Alcantarillado",
          layer: contenedoresLayer,
        },
        {
          label: "Señalizaciones",
          layer: contenedoresLayer,
        },
        {
          label: "Contenedores",
          layer: contenedoresLayer,
        },
        {
          label: "Alumbrado",
          layer: contenedoresLayer,
        },
        {
          label: "Reurbanización",
          layer: contenedoresLayer,
        },
      ],
    },
    {
      label: "<b>02. Instalaciones públicas</b>",
      selectAllCheckbox: false,
      collapsed: true,
      children: [
        {
          label: "Deportivas",
          layer: contenedoresLayer,
        },
        {
          label: "Eléctricas",
          layer: contenedoresLayer,
        },
        {
          label: "Red de riegos",
          layer: contenedoresLayer,
        },
        {
          label: "Port Cararroja",
          layer: contenedoresLayer,
        },
        {
          label: "Parking Plaça Major",
          layer: contenedoresLayer,
        },
        {
          label: "Cementerio",
          layer: contenedoresLayer,
        },
      ],
    },
    {
      label: "<b>03. Espacios públicos</b>",
      selectAllCheckbox: false,
      collapsed: true,
      children: [
        {
          label: "Plazas",
          layer: contenedoresLayer,
        },
        {
          label: "Parques, jardines y<br/>zonas verdes",
          layer: contenedoresLayer,
        },
        {
          label: "Villa romana",
          layer: villaRomanaLayer,
        },
      ],
    },
    {
      label: "<b>04. Edificios públicos</b>",
      selectAllCheckbox: false,
      collapsed: true,
      children: [
        {
          label: "Centros educativos",
          layer: centroEducativoLayer,
        },
        {
          label: "Centos culturales",
          layer: centroCulturalLayer,
        },
        {
          label: "Centros sociosanitarios",
          layer: centroSocioLayer,
        },
      ],
    },
    {
      label: "<b>05. Seguridad</b>",
      selectAllCheckbox: false,
      collapsed: true,
      children: [
        {
          label: "Megafonía",
          layer: contenedoresLayer,
        },
        {
          label: "Barreras automáticas",
          layer: contenedoresLayer,
        },
        {
          label: "Centro de emergencias<br/>Jaume I",
          layer: contenedoresLayer,
        },
      ],
    },
  ],
};

var seleccionador = new L.Control.Layers.Tree(overlayMaps, null, {
  collapsed: false,
}).addTo(map);
