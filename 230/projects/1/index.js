// script for canvas thing
//

// set canvas item
var c = document.getElementById('myCanvas');
width = c.getAttribute("width");
height = c.getAttribute("height");

// set brush sizes

var size = 4;

// set the context of the canvas
ct = c.getContext('2d');

c.addEventListener('mousemove', function(evt){
    var mousePos = getMousePos(c, evt);
    drawNode(mousePos);
}, false);

function getMousePos(canvas, evt){
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function drawNode(mousePos){
    ct.beginPath();
    ct.arc(mousePos.x, mousePos.y, size, 0, 2 * Math.PI);
    ct.stroke();
    ct.fill;
}

// get a listener for keypresses
window.addEventListener('keypress', doKeyDown, false);

function doKeyDown(e){
    if (e.keyCode == '91'){
        if (size > 1){
            size--;
        }
    }
    else if (e.keyCode == '93'){
        size++;
    }
}
