var Undolist = [];
var Redolist = [];
var canvas = document.getElementById( 'canvas-real' );
var ctx = canvas.getContext('2d');
var link = document.getElementById('save');
link.innerHTML = 'download image';





function saveHistory() {
  link.href = canvas.toDataURL();
  Undolist.push(canvas.toDataURL());

}

$("#save").click(saveHistory());

$("#undo").click(function(){
  let firstPopItem = Undolist.pop();
  Redolist.push(firstPopItem);
  let img = document.createElement('img') ;
  img.src = firstPopItem;
  img.onload = () => {
    ctx.clearRect(0, 0, 2000, 1080);
    ctx.drawImage(img, 0, 0, 2000, 1080, 0, 0, 2000, 1080);   
  }
})

$("#Redo").click(function(){
  let secondPopItem = Redolist.pop();
  // var img = new Element('img', {'src':secondPopItem()});
  let img = document.createElement('img') ;
  img.src = secondPopItem;
  // <img src="123" />
  img.onload = function() {
    ctx.clearRect(0, 0, 2000, 1080);
    ctx.drawImage(img, 0, 0, 2000, 1080, 0, 0, 2000, 1080);
  }
})



