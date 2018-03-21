class DrawingEllipse extends PaintFunction{
  
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        contextDraft.lineWidth = width;
        contextReal.lineWidth = width;
    }
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        contextDraft.fillStyle = "#000000"
        //this.contextDraft.strokeStyle = "#df4b26";
        contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        contextDraft.beginPath();
        contextDraft.ellipse(this.origX, this.origY, Math.abs(this.origY-coord[1]), Math.abs(this.origX-coord[0]), 90 * Math.PI/180, 0, 2 * Math.PI)
        contextDraft.stroke();
    }

    onMouseMove(){
        
    }
    onMouseUp(coord){
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