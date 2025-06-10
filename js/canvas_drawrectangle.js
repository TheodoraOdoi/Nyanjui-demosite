// JS document illustrating how to draw a rectangle on the HTML5 canvas

// function to be called when the document loads
window.onload = function() 
{
    //  get a reference to the canvas con the html document/ page
    let docCanvas = document.getElementById('my-canvas');
    let myContext = docCanvas.getContext('2d');

    // set up and draw a rectangle
    myContext.beginPath();
    // set the rectangles start points and its width and height
    myContext.rect(10, 40, 200, 100);
    myContext.fillStyle = "#c0b0f0"; 
    myContext.lineWidth = 5;
    myContext.strokeStyle = "#fff";
    myContext.stroke();
    myContext.fill();
};