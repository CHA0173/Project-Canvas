class DrawingCircle extends PaintFunction{
  
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
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
        contextDraft.arc(this.origX, this.origY, (Math.abs(this.origX - coord[0])),0,360 )
        contextDraft.closePath();
        contextDraft.stroke();
    }

    onMouseMove(){
        
    }
    onMouseUp(coord){

        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc(this.origX, this.origY, (Math.abs(this.origX - coord[0])),0,360 )
        this.contextReal.closePath();
        this.contextReal.stroke();
    }
    onMouseLeave(){
        
    }
    onMouseEnter(){}
}