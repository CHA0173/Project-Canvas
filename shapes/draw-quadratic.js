class DrawingQuadratic extends PaintFunction{
  
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.ctx3 = ctx3;
        contextDraft.lineWidth = newWidth;
        contextReal.lineWidth = newWidth;
        this.startCoords = [];
        this.startLineCoords = [];
        this.endLineCoords = [];
        this.DrawCanvas = function(){
            DrawCanvas();
        };
        this.DrawCanvasReal = function() {
            DrawCanvasReal();
        }
    }

    onMouseDown(coord,event) {
        this.origX = coord[0];
        this.origY = coord[1];
        
            DrawCanvas();

            // start dragging
            var dx, dy;
            for (var p in point) {
                dx = point[p].x - coord[0];
                dy = point[p].y - coord[1];
                if ((dx * dx) + (dy * dy) < style.point.radius * style.point.radius) {
                    drag = p;
                    dPoint = {x: coord[0], y: coord[1]};
                    canvasDraft.style.cursor = "move";
                    return;
                }
            }                     
    }

    onDragging(coord,event){
        if (drag) {
			//e = MousePos(e);
			point[drag].x += coord[0] - dPoint.x;
			point[drag].y += coord[1] - dPoint.y;
			dPoint = {x: coord[0], y: coord[1]};
			DrawCanvas();
		}
    }

    onMouseMove(coord){
    }

    onMouseUp(coord,event){
        dragging = false;

    }
    onMouseLeave(){
        dragging = false;
    }
    onMouseEnter(){
        
    }

    

} // end of Class


var e, point, sytle, drag, dPoint, cp2 ='', slope, angle, center, pAngle, pSlope ;

point = {
    p1: { x:100, y:250 },
    p2: { x:400, y:250 },
   cp1: { x:250, y:100 }
};

// default styles
style = {
    curve:	{ width: newWidth, color: "#333" },
    cpline:	{ width: 1, color: "#C00" },
    point: { radius: 10, width: 2, color: "#900", fill: "rgba(200,200,200,0.5)", arc1: 0, arc2: 2 * Math.PI }
}

// DRAW CANVAS
function DrawCanvas() {
    contextDraft.clearRect(0, 0, canvas.width, canvas.height);

    // curve
    contextDraft.lineWidth = newWidth;
    contextDraft.strokeStyle = style.curve.color;
    contextDraft.beginPath();
    contextDraft.moveTo(point.p1.x, point.p1.y);
    contextDraft.quadraticCurveTo(point.cp1.x, point.cp1.y, point.p2.x, point.p2.y);
    contextDraft.stroke();
    var imgData = contextDraft.getImageData(0,0,800,600)
    ctx3.putImageData(imgData, 0, 0);


    // control lines
    contextDraft.lineWidth = style.cpline.width;
    contextDraft.strokeStyle = style.cpline.color;
    contextDraft.beginPath();
    contextDraft.moveTo(point.p1.x, point.p1.y);
    contextDraft.lineTo(point.cp1.x, point.cp1.y);
    if (point.cp2) {
        contextDraft.moveTo(point.p2.x, point.p2.y);
        contextDraft.lineTo(point.cp2.x, point.cp2.y);
    }
    else {
        contextDraft.lineTo(point.p2.x, point.p2.y);
    }
    contextDraft.stroke();
    

    // control points
    for (var p in point) {
        contextDraft.lineWidth = style.point.width;
        contextDraft.strokeStyle = style.point.color;
        contextDraft.fillStyle = style.point.fill;
        contextDraft.beginPath();
        contextDraft.arc(point[p].x, point[p].y, style.point.radius, style.point.arc1, style.point.arc2, true);
        contextDraft.fill();
        contextDraft.stroke();
    }
    
} // end of DrawCanvas




// draw canvas real
function DrawCanvasReal() {
    contextDraft.clearRect(0, 0, canvas.width, canvas.height);
    
    // control lines
    contextReal.lineWidth = style.cpline.width;
    contextReal.strokeStyle = style.cpline.color;
    contextReal.beginPath();
    contextReal.moveTo(point.p1.x, point.p1.y);
    contextReal.lineTo(point.cp1.x, point.cp1.y);
    if (point.cp2) {
        contextReal.moveTo(point.p2.x, point.p2.y);
        contextReal.lineTo(point.cp2.x, point.cp2.y);
    }
    else {
        contextReal.lineTo(point.p2.x, point.p2.y);
    }
    contextReal.stroke();
    
    // curve
    contextReal.lineWidth = style.curve.width;
    contextReal.strokeStyle = style.curve.color;
    contextReal.beginPath();
    contextReal.moveTo(point.p1.x, point.p1.y);
    if (point.cp2) {
        contextReal.bezierCurveTo(point.cp1.x, point.cp1.y, point.cp2.x, point.cp2.y, point.p2.x, point.p2.y);
    }
    else {
        contextReal.quadraticCurveTo(point.cp1.x, point.cp1.y, point.p2.x, point.p2.y);
    }
    contextReal.stroke();

    // control points
    for (var p in point) {
        contextReal.lineWidth = style.point.width;
        contextReal.strokeStyle = style.point.color;
        contextReal.fillStyle = style.point.fill;
        contextReal.beginPath();
        contextReal.arc(point[p].x, point[p].y, style.point.radius, style.point.arc1, style.point.arc2, true);
        contextReal.fill();
        contextReal.stroke();
    }
    
}