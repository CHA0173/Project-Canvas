class DrawingCircle extends PaintFunction{
  
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.contextDraft.strokeStyle = "#f44";
        this.contextDraft.lineWidth = 5;
        this.origX = coord[0];
        this.origY = coord[1];
    }

    onDragging(coord,event){
        this.contextDraft.strokeStyle = "#f44";
        this.contextDraft.lineWidth = 5;
        this.contextDraft.clearRect
        (0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.arc
        (this.origX, this.origY, Math.pow(Math.pow(this.origX - coord[0],2)+Math.pow(this.origY - coord[1],2),0.5),0,360 );
        this.contextDraft.stroke();
    }

    onMouseMove(){ }
    onMouseUp(coord){
        this.contextReal.strokeStyle = "#f44";
        this.contextReal.lineWidth = 5;
        this.contextDraft.clearRect
        (0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc
        (this.origX, this.origY, Math.pow(Math.pow(this.origX - coord[0],2)+Math.pow(this.origY - coord[1],2),0.5),0,360 );
        this.contextReal.stroke();
    }
    onMouseLeave(){ }
    onMouseEnter(){ }
}