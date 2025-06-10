// JS document illustrating how to draw an arc on the html5 canvas

// function to be called when the document loads
window.onload = function() 
{
    //  get a reference to the canvas con the html document/ page
    let docCanvas = document.getElementById('my-canvas');
    let myContext = docCanvas.getContext('2d');

    // se up and draw the arc
    // variables to hold the arc's x & y coordinates
    let xCoord = docCanvas.width / 2;
    let yCoord = docCanvas.height / 2;
    // set the radius of the arc from the center
    let rad = 70;
    // set the start and end angles of the arc
    let startAngle = Math.PI * .9;
    let endAngle = Math.PI * 1.8;
    // Draw the arc with the above parameters
    myContext.arc(xCoord, yCoord, rad, startAngle, endAngle, false);
    myContext.lineWidth = 8;
    myContext.strokeStyle = "#00b0f0";
    myContext.stroke();
};