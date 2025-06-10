// JS document illustrating how to draw a bezier curve on the HTML5 canvas

// function to be called when the document loads
window.onload = function() 
{
    //  get a reference to the canvas con the html document/ page
    let docCanvas = document.getElementById('my-canvas');
    let myContext = docCanvas.getContext('2d');

    // set up and draw the bezier curve
    myContext.beginPath();
    myContext.moveTo(188, 130); 
    myContext.bezierCurveTo(120, 9, 380, 9, 280, 90);
    myContext.lineWidth = 15;
    myContext.strokeStyle = 'blue';
    myContext.stroke(); 
    myContext.closePath();
};