class DrawingBezier extends PaintFunction{
  
        constructor(contextReal){
            super();
            this.contextReal = contextReal;
            this.contextDraft = contextDraft;
            this.ctx4 = ctx4;
            contextDraft.lineWidth = newWidth;
            contextReal.lineWidth = newWidth;
            this.startCoords = [];
            this.startLineCoords = [];
            this.endLineCoords = [];
            this.DrawBez = function(){
                DrawBez();
            };
            this.DrawCanvasReal = function() {
                DrawCanvasReal();
            }
        }
    
        onMouseDown(coord,event) {
            this.origX = coord[0];
            this.origY = coord[1];
            
            DrawBez();
    
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
                DrawBez();
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
    
    
    
    // default styles
    style = {
        curve:	{ width: newWidth, color: "#333" },
        cpline:	{ width: 1, color: "#C00" },
        point: { radius: 10, width: 2, color: "#900", fill: "rgba(200,200,200,0.5)", arc1: 0, arc2: 2 * Math.PI }
    }
    
    // DRAW CANVAS
    function DrawBez() {
var e, point, sytle, drag, dPoint, cp2 ='', slope, angle, center, pAngle, pSlope ;
    
    point = {
        p1: { x:100, y:250 },
        p2: { x:400, y:250 },
       cp1: { x:250, y:100 },
       cp2: { x: 350, y: 100 }
    };
    
        contextDraft.clearRect(0, 0, canvas.width, canvas.height);
    
        // curve
        contextDraft.lineWidth = newWidth;
        contextDraft.strokeStyle = style.curve.color;
        contextDraft.beginPath();
        contextDraft.moveTo(point.p1.x, point.p1.y);
        contextDraft.bezierCurveTo(point.cp1.x, point.cp1.y, point.cp2.x, point.cp2.y, point.p2.x, point.p2.y);
        contextDraft.stroke();
        var imgData = contextDraft.getImageData(0,0,800,600)
        ctx3.putImageData(imgData, 0, 0);
    
    
        // control lines
        contextDraft.lineWidth = style.cpline.width;
        contextDraft.strokeStyle = style.cpline.color;
        contextDraft.beginPath();
        contextDraft.moveTo(point.p1.x, point.p1.y);
        contextDraft.lineTo(point.cp1.x, point.cp1.y);
        contextDraft.moveTo(point.p2.x, point.p2.y);
        contextDraft.lineTo(point.cp2.x, point.cp2.y);
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
    