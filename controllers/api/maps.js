var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2xvbmd5NyIsImEiOiJja3BxNHpzdzcwOHJzMnNydjdpeDI2dWIxIn0.5FFHiq6sQIPXBxUYB0o_qQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

// creating an "I am here" circle
L.circle([51.508, -0.11], 500, {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5

}).addTo(mymap).bindPopup("I am here.");