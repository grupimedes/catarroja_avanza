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
          layer: ejemplo_poli,
        },
        {
          label: "Señalizaciones",
          layer: contenedores,
        },
        {
          label: "Contenedores",
          layer: contenedores,
        },
        {
          label: "Aceras y viales",
          layer: contenedores,
        },
        {
          label: "Alumbrado",
          layer: contenedores,
        },
        {
          label: "Reurbanización",
          layer: contenedores,
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
          layer: ejemplo_poli,
        },
        {
          label: "Eléctricas",
          layer: contenedores,
        },
        {
          label: "Red de riegos",
          layer: contenedores,
        },
        {
          label: "Port Cararroja",
          layer: contenedores,
        },
        {
          label: "Parking Plaça Major",
          layer: contenedores,
        },
        {
          label: "Cementerio",
          layer: contenedores,
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
          layer: ejemplo_poli,
        },
        {
          label: "Parques, jardines y<br/>zonas verdes",
          layer: contenedores,
        },
        {
          label: "Villa romana",
          layer: contenedores,
        },
        {
          label: "Huerta",
          layer: contenedores,
        },
      ],
    },
    {
      label: "<b>04. Edificios públicos</b>",
      selectAllCheckbox: false,
      collapsed: true,
      children: [
        {
          label: "Instituto",
          layer: ejemplo_poli,
        },
        {
          label: "Ambulatorio",
          layer: contenedores,
        },
        {
          label: "Espai Barraques<br/>(Nova Casa Major)",
          layer: contenedores,
        },
        {
          label: "Local Servicios Sociales",
          layer: contenedores,
        },
        {
          label: "TAC",
          layer: contenedores,
        },
        {
          label: "Museo Antonia Mir",
          layer: contenedores,
        },
        {
          label: "Espai Jove",
          layer: contenedores,
        },
        {
          label: "Casa Cultura",
          layer: contenedores,
        },
        {
          label: "EPA",
          layer: contenedores,
        },
        {
          label: "Residencia",
          layer: contenedores,
        },
        {
          label: "Centro de emergencia<br/>Jaume I",
          layer: contenedores,
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
          layer: ejemplo_poli,
        },
        {
          label: "Barreras automáticas",
          layer: contenedores,
        },
        {
          label: "Otros elementos",
          layer: contenedores,
        },
      ],
    },
  ],
};

var seleccionador = new L.Control.Layers.Tree(overlayMaps, null, {
  collapsed: false,
}).addTo(map);
