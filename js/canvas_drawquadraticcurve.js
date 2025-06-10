// JS document illustrating how to draw a quadratic curve on the HTML5 canvas

// function to be called when the document loads
window.onload = function() 
{
    //  get a reference to the canvas con the html document/ page
    let docCanvas = document.getElementById('my-canvas');
    let myContext = docCanvas.getContext('2d');

    // set up and draw the quadratic curve;
    myContext.beginPath();
    myContext.moveTo(178, 150); 
    myContext.quadraticCurveTo(220, 0, 320, 150); 
    myContext.lineWidth = 15; 
    myContext.strokeStyle = "fuchsia"; 
    myContext.stroke();
};