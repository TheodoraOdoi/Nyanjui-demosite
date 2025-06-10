// JS document illustrating how to draw an image on the HTML5 canvas

// function to be called when the document loads
window.onload = function() 
{
    //  get a reference to the canvas con the html document/ page
    let docCanvas = document.getElementById('my-canvas');
    let myContext = docCanvas.getContext('2d');

    // set up and draw the text
    // create an image object
    let myImage = new Image();
    // set the starting x and y coordinates
    let xPos = 50, yPos = 15;
    // set the image's width and height
    let imagewidth = 150, imageheight = 150;
    // set the image source
    myImage.src = '../../images/HTML logo.png';

    // function to load the image
    myImage.onload = function() 
    {
        myContext.drawImage(myImage, xPos, yPos, imagewidth, imageheight);
    };
};