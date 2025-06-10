// JS document illustrating how to draw a circle on the html5 canvas

// function to be called when the document loads
window.onload = function() 
{
    //  get a reference to the canvas con the html document/ page
    let docCanvas = document.getElementById('my-canvas');
    let myContext = docCanvas.getContext('2d');

    // set up and draw a circle
    // variables to hold the circle's x & y coordinates
    let xCoord = docCanvas.width / 2;
    let yCoord = docCanvas.height / 2;
    // set the radius of the circle from the center
    let rad = 70;
    // Draw the circle with the above parameters
    myContext.beginPath();
    myContext.arc(xCoord, yCoord, rad, 0, Math.PI * 2, false);
    myContext.lineWidth = 8;
    myContext.strokeStyle = "#00b0f0";
    myContext.stroke();
    myContext.fill();
    myContext.closePath();
};