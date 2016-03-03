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
    ct.strokeStyle = "white";
    ct.stroke();
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

$('#reset').click(function(){
    ct.clearRect(0,0, c.width, c.height);
});

$('#save').click(function(){
    var image = c.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href=image;
});

////////////////
//window stuff//
////////////////
$(function(){
    function res(){
        var target_width = $('#c_container').width();
        ct.canvas.width = target_width;
        if ($('#myCanvas').hasClass('fullscreen')){
            ct.canvas.height = $(window).height() - $('nav').height();
        }
    }

    $(window).resize(function(){
        res();
    });

    res();
});
