/* JavaScript file to demonstrate how to use the Open maps API to display a map. */
 
function initMap() 
{
    // The location to center the map on 
    const location ={lat: -1.2723538,lng: 36.8117316};
 
    // Create a map and set the initial view to the specified location
    const map = L.map('map').setView([location.lat,location.lng],15);
 
    // Add OpenStreetMap tile layer (hybrid map style equivalent)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">'
         + 'OpenStreetMap</a> contributors' 
    }).addTo(map);
 
    // Add a marker to the map at the specified location
    L.marker([location.lat,location.lng]).addTo(map)
    .bindPopup("Latitude: " + location.lat +"<br/> Longitude: " + location.lng)
    .openPopup();
}
 
// Add an event handler to the btnDisplayMap button
document.getElementById("btnDisplayMap").addEventListener("click", function(){
    // Initialise the map when the button is clicked.
    initMap();
})