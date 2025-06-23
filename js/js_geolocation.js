/* JavaScript file to demonstrate retrieving the user's location using the Geolocation API. */
 
function getLocation() 
{
    // Check if the user's browser supports Geolocation API 
    if (navigator.geolocation) 
        navigator.geolocation.getCurrentPosition(showPosition,);
    else 
        alert('sorry, your browser doesn\t support localstorage. \nPlease try a newer version or switch to a different browser.');   
}


// function to show/display the position
function showPosition(position) 
{
    alert(`Latitude: ${position.coords.latitude}
        \nLongitude: ${position.coords.longitude}`);
}