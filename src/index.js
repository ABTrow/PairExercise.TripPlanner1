const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYWJ0cm93IiwiYSI6ImNqejhtbTF2ajE4OTIzbm5samloN2p3MGYifQ.bwAHnbFp6KAZgUmpv3-f8A";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/light-v10" // mapbox has lots of different map styles available.
});



const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(https://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago
