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
          layer: alcantarilladoLayer,
        },
        {
          label: "Señalizaciones",
          layer: sinDatos,
        },
        {
          label: "Contenedores",
          layer: contenedoresLayer,
        },
        {
          label: "Alumbrado",
          layer: sinDatos,
        },
        {
          label: "Reurbanización",
          layer: sinDatos,
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
          layer: deportivasLayer,
        },
        {
          label: "Eléctricas",
          layer: electricasLayer,
        },
        {
          label: "Red de riegos",
          layer: riegoLayer,
        },
        {
          label: "Port Cararroja",
          layer: sinDatos,
        },
        {
          label: "Parking Plaça Major",
          layer: parkingLayer,
        },
        {
          label: "Cementerio",
          layer: sinDatos,
        },
      ],
    },
    {
      label: "<b>03. Espacios públicos</b>",
      selectAllCheckbox: false,
      collapsed: true,
      children: [
        {
          label: "Plazas, parques y jardines",
          layer: plazasParquesJardinesLayer,
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
          layer: megafoniaLayer,
        },
        {
          label: "Barreras automáticas",
          layer: sinDatos,
        },
        {
          label: "Centro de emergencias<br/>Jaume I",
          layer: sinDatos,
        },
      ],
    },
  ],
};

var seleccionador = new L.Control.Layers.Tree(overlayMaps, null, {
  collapsed: false,
}).addTo(map);
