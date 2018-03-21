class DrawingPolygon extends PaintFunction{
  
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        contextDraft.lineWidth = width;
        contextReal.lineWidth = width;
        this.startCoords = [];
        this.startLineCoords = [];
        this.endLineCoords = [];
    }
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];

        if (this.startCoords == '') {
            this.startCoords.push(coord[0], coord[1])
            this.startLineCoords.push(coord[0], coord[1]);
        } 
                
        if (this.endLineCoords[0] !== this.startLineCoords[0] && this.endLineCoords[1] !== this.startLineCoords[1]) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.startLineCoords[0], this.startLineCoords[1])
            this.startLineCoords = [];
            this.startLineCoords.push(coord[0], coord[1]);
            if (Math.abs(this.startCoords[0] - this.endLineCoords[0]) < 5 && Math.abs(this.startCoords[1] - this.endLineCoords[1]) < 5) {
                this.endLineCoords[0] = this.startCoords[0];
                this.endLineCoords[1] = this.startCoords[1];
                this.contextReal.closePath()
                this.startLineCoords = [];
                this.startCoords = [];
            }
            this.contextReal.lineTo(this.endLineCoords[0],this.endLineCoords[1])
            this.contextReal.stroke()
            

        }
        
    }
    onDragging(coord,event){
        
    }

    onMouseMove(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.startLineCoords[0], this.startLineCoords[1])
        this.contextDraft.lineTo(coord[0],coord[1])
        this.contextDraft.stroke();
        this.endLineCoords = [];
        this.endLineCoords.push(coord[0], coord[1]);

    }
    onMouseUp(coord,event){
            
    }
    onMouseLeave(){
        
    }
    onMouseEnter(){}
}