class DrawingRectangle extends PaintFunction{

    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.contextDraft.strokeStyle = rgbaColorFill;
        this.contextDraft.lineWidth = 5;
        this.contextDraft.fillStyle = rgbaColor;
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextDraft.stroke();
    }
    onDragging(coord,event){
        this.contextDraft.strokeStyle = rgbaColorFill;
        this.contextDraft.lineWidth = 5;
        this.contextDraft.fillStyle = rgbaColor;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        this.contextDraft.stroke();
        this.contextDraft.fill();
    }

    onMouseMove(){}

    onMouseUp(coord){
        this.contextReal.strokeStyle = rgbaColorFill;
        this.contextReal.lineWidth = 5;
        this.contextReal.fillStyle = rgbaColor;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        this.contextReal.stroke();
        this.contextReal.fill();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
