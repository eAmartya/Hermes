var map = L.map("map").setView([51.505, -0.09], 10);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  minZoom: 3,
}).addTo(map);
