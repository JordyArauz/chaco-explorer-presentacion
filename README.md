# Dashboard de Turismo Inteligente

Proyecto web académico para explorar destinos turísticos usando mapa interactivo, clima actual, pronóstico, lugares cercanos e itinerario guardado.

## Funcionalidades principales

- Búsqueda de ciudades por nombre.
- Clima actual y pronóstico de 5 días.
- Mapa interactivo con Leaflet y OpenStreetMap.
- Lugares cercanos usando Wikipedia GeoSearch.
- Itinerario personalizado con LocalStorage.
- Estimador básico de presupuesto.
- Modo claro / oscuro.
- Diseño responsive para computadora y celular.

## Estructura del proyecto

```text
turismo-main/
├── index.js
├── package.json
├── README.md
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
└── service/
    └── tourismService.js
```

## Cómo ejecutar el proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar el servidor:

```bash
npm start
```

3. Abrir en el navegador:

```text
http://localhost:3000
```

## APIs y librerías usadas

- Open-Meteo Geocoding API: búsqueda de ciudades.
- Open-Meteo Forecast API: clima actual y pronóstico.
- Wikipedia GeoSearch API: lugares cercanos por coordenadas.
- Leaflet: mapa interactivo.
- Chart.js: gráfica de temperaturas.

## Idea para exposición

Este dashboard ayuda a un turista a tomar decisiones rápidas antes de visitar una ciudad. El usuario puede buscar un destino, analizar el clima, revisar puntos turísticos cercanos, ubicarlos en un mapa y crear un pequeño itinerario de viaje.
