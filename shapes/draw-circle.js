class DrawingCircle extends PaintFunction{
  
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
        this.startCoords = [];
        this.startCoords.push(coord[0], coord[1]);
    }
    onDragging(coord,event){
        contextDraft.fillStyle = "#000000"
        //this.contextDraft.strokeStyle = "#df4b26";
        contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        contextDraft.beginPath();
        this.radius = [];
        this.radius.push(Math.sqrt(Math.pow(coord[0]-this.origX, 2) + Math.pow(coord[1]-this.origY,2)))
        contextDraft.arc(this.startCoords[0], this.startCoords[1], this.radius, 0, 360 )
        contextDraft.closePath();
        contextDraft.stroke();
    }

    onMouseMove(){
        
    }
    onMouseUp(coord){

        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc(this.startCoords[0], this.startCoords[1], this.radius, 0, 360 )
        this.contextReal.closePath();
        this.contextReal.stroke();
    }
    onMouseLeave(){
        
    }
    onMouseEnter(){}
}