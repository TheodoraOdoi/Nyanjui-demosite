

// function to be called when the document loads
window.onload = function() 
{
    //  get a reference to the canvas con the html document/ page
    let docCanvas = document.getElementById('my-canvas');
    let myContext = docCanvas.getContext('2d');

    // se up and draw the line
    myContext.beginPath();
    myContext.moveTo(50, 100); 
    myContext.lineTo(250, 50);
    myContext.lineWidth = 5;
    myContext.strokeStyle = "#fff";
    myContext.stroke();
};