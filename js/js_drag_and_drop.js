/* JavaScript to demonstrate drag and drop ds and functionality  */

function drag_image(event) 
{
    event.dataTransfer.setData('image', event.target.id);
}

function drop_image(event)
{
    let data = event.dataTransfer.getData('image');
    event.target.appendChild(document.getElementById(data));
}


function allow_drop(event)
{
    event.preventDefault();
}