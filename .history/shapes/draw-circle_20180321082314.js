class DrawingCircle extends PaintFunction{
  
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        contextDraft.lineWidth = width;
        contextReal.lineWidth = width;            
    }
    
    onMouseDown(coord,event){
        this.contextDraft.strokeStyle = "#f44";
        this.contextDraft.lineWidth = 5;
        this.origX = coord[0];
        this.origY = coord[1];
        this.startCoords = [];
        this.startCoords.push(coord[0], coord[1]);
    }

    onDragging(coord,event){
<<<<<<< HEAD:shapes/draw-circle.js
        contextDraft.fillStyle = "#000000"
        //this.contextDraft.strokeStyle = "#df4b26";
        contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        contextDraft.beginPath();
        this.radius = [];
        this.radius.push(Math.sqrt(Math.pow(coord[0]-this.origX, 2) + Math.pow(coord[1]-this.origY,2)))
        contextDraft.arc(this.startCoords[0], this.startCoords[1], this.radius, 0, 360 )
        contextDraft.closePath();
        contextDraft.stroke();
=======
        this.contextDraft.strokeStyle = "#f44";
        this.contextDraft.lineWidth = 5;
        this.contextDraft.clearRect
        (0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.arc
        (this.origX, this.origY, (Math.abs(this.origX - coord[0])),0,360 );
        this.contextDraft.stroke();
>>>>>>> da51188... Add files via upload:draw-circle.js
    }

    onMouseMove(){ }
    onMouseUp(coord){
        this.contextReal.strokeStyle = "#f44";
        this.contextReal.lineWidth = 5;
        this.contextDraft.clearRect
        (0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
<<<<<<< HEAD:shapes/draw-circle.js
        this.contextReal.arc(this.startCoords[0], this.startCoords[1], this.radius, 0, 360 )
        this.contextReal.closePath();
=======
        this.contextReal.arc
        (this.origX, this.origY, (Math.abs(this.origX - coord[0])),0,360 );
>>>>>>> da51188... Add files via upload:draw-circle.js
        this.contextReal.stroke();
    }
    onMouseLeave(){ }
    onMouseEnter(){ }
}

// class DrawingCircle extends PaintFunction{
  
//     constructor(contextReal){
//         super();
//         this.contextReal = contextReal;
//         this.contextDraft = contextDraft;            
//     }
    
//     onMouseDown(coord,event){
//         this.contextDraft.strokeStyle = "#f44";
//         this.origX = coord[0];
//         this.origY = coord[1];
//     }

//     onDragging(coord,event){
//         this.contextDraft.strokeStyle = "#f44";
//         this.contextDraft.clearRect
//         (0,0,canvasDraft.width,canvasDraft.height);
//         this.contextDraft.beginPath();
//         this.contextDraft.arc
//         (this.origX, this.origY, (this.origX - coord[0]),0,360 );
//         this.contextDraft.stroke();
//     }

//     onMouseMove(){ }
//     onMouseUp(coord){
//         this.contextReal.strokeStyle = "#f44";
//         this.contextDraft.clearRect
//         (0,0,canvasDraft.width,canvasDraft.height);
//         this.contextReal.beginPath();
//         this.contextReal.arc
//         (this.origX, this.origY, (this.origX - coord[0]),0,360 );
//         this.contextReal.stroke();
//     }
//     onMouseLeave(){ }
//     onMouseEnter(){ }
// }