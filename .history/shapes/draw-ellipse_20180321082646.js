class DrawingEllipse extends PaintFunction{
  
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        contextDraft.lineWidth = width;
        contextReal.lineWidth = width;
    }
    
    onMouseDown(coord,event){
        this.contextDraft.strokeStyle = "#f44";
        this.contextDraft.lineWidth = 10;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.strokeStyle = "#f44";
        this.contextDraft.lineWidth = 10;
        this.contextDraft.clearRect
        (0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.ellipse
        (this.origX, this.origY, Math.abs(this.origY-coord[1]), Math.abs(this.origX-coord[0]), 90 * Math.PI/180, 0, 2 * Math.PI)
        this.contextDraft.stroke();
    }

    onMouseMove(){
        
    }
    onMouseUp(coord){
        this.contextReal.strokeStyle = "#f44";
        this.contextReal.lineWidth = 10;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillStyle = "#000000"
        this.contextReal.beginPath();
        this.contextReal.ellipse(this.origX, this.origY, Math.abs(this.origY-coord[1]), Math.abs(this.origX-coord[0]), 90 * Math.PI/180, 0, 2 * Math.PI)
        this.contextReal.stroke();
    }
    onMouseLeave(){
        
    }
    onMouseEnter(){}
}