let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;
//Tool settings
let width = 5;
let lineWidth = width;
let lineJoin = "round";
let lineCap = "round"
let strokeStyle = "red";
let fillStyle = "blue";


/*let canvas = document.getElementsByClassName('canvas');
contextReal.canvas.width = window.innerWidth -200;
contextReal.canvas.height = window.innerHeight -200;
contextDraftcontextDraft.canvas.width = window.innerWidth -200;
contextDraft.canvas.height = window.innerHeight -200;
*/


$('#canvas-draft').mousedown(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
});

$('#canvas-draft').mousemove(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove([mouseX,mouseY],e);
    $('#coordinates').html(`X: ${mouseX}, Y: ${mouseY}`)
});

$('#canvas-draft').mouseup(function(e){
    dragging = false;
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseUp([mouseX,mouseY],e);
});

$('#canvas-draft').mouseleave(function(e){
    dragging = false;
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});

$('#canvas-draft').mouseenter(function(e){
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});

class PaintFunction{
    constructor(){}
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}    
