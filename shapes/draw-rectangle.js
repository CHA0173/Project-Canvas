

class DrawingRectangle extends PaintFunction{
  constructor(contextReal,contextDraft){
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;            
  }
  
  onMouseDown(coord,event){
      this.contextReal.strokeStyle = "#f44";
      this.origX = coord[0];
      this.origY = coord[1];
  }
  onDragging(coord,event){
      this.contextDraft.strokeStyle = "#f44";
      this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
      this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
  }

  onMouseMove(){}
  onMouseUp(coord){
      this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
      this.contextReal.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
      saveHistory()
  }
  onMouseLeave(){}
  onMouseEnter(){}
}