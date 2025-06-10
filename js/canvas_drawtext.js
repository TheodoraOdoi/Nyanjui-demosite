// JS document illustrating how to draw a text on the HTML5 canvas

// function to be called when the document loads
window.onload = function() 
{
    //  get a reference to the canvas con the html document/ page
    let docCanvas = document.getElementById('my-canvas');
    let myContext = docCanvas.getContext('2d');

    // set up and draw the text
    // choose the font to be used
    myContext.font = "28pt verdana";
    myContext.fillStyle = "#f00";
    myContext.linewidth = 2;
    myContext.strokeStyle = "#ccc";
    myContext.strokeText("HTML5 Canvas!", 25, 85)
    myContext.fillText("HTML5 Canvas!", 25, 85);
};