var colorBlock = document.getElementById('color-block');
var ctx1 = colorBlock.getContext('2d');
var width1 = colorBlock.width;
var height1 = colorBlock.height;

var colorStrip = document.getElementById('color-strip');
var ctx2 = colorStrip.getContext('2d');
var width2 = colorStrip.width;
var height2 = colorStrip.height;

var colorLabel = document.getElementById('color-label');
var colorLabelFill = document.getElementById('color-labelFill');

var x = 0;
var y = 0;
var drag = false;
var rgbaColor = 'rgba(255,0,0,1)';
var rgbaColorFill = 'rgba(0,255,0,1)';

ctx1.rect(0, 0, width1, height1);
fillGradient();
fillGradientFill();

ctx2.rect(0, 0, width2, height2);
var grd1 = ctx2.createLinearGradient(0, 0, 0, height2);
grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
ctx2.fillStyle = grd1;
ctx2.fill();

function click(e) {
  if (!event.shiftKey) {
  x = e.offsetX;
  y = e.offsetY;
  var imageData = ctx2.getImageData(x, y, 1, 1).data;
  rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
  fillGradient();
} else {
  x = e.offsetX;
  y = e.offsetY;
  var imageDataFill = ctx2.getImageDataFill(x, y, 1, 1).data;
  rgbaColor = 'rgba(' + imageDataFill[0] + ',' + imageDataFill[1] + ',' + imageDataFill[2] + ',1)';
  fillGradientFill();
  }
}

function fillGradient() {
  ctx1.fillStyle = rgbaColor;
  ctx1.fillRect(0, 0, width1, height1);

function fillGradientFill() {
  ctx1.fillStyle = rgbaColorFill;
  ctx1.fillRect(0, 0, width1, height1);
}

  var grdWhite = ctx2.createLinearGradient(0, 0, width1, 0);
  grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
  grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
  ctx1.fillStyle = grdWhite;
  ctx1.fillRect(0, 0, width1, height1);

  var grdBlack = ctx2.createLinearGradient(0, 0, 0, height1);
  grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
  grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
  ctx1.fillStyle = grdBlack;
  ctx1.fillRect(0, 0, width1, height1);
}

function mousedown(e) {
  drag = true;
  if (!event.shiftKey) {
  changeColor(e);
  } else {
    changeColorFill(e);
  }
}

function mousemove(e) {
  if (drag && !event.shiftKey) {
    changeColor(e);
  } else if (drag && event.shiftKey) {
    changeColorFill(e);
  }
  else {
  }
}

function mouseup(e) {
  drag = false;
}

function changeColor(e) {
  x = e.offsetX;
  y = e.offsetY;
  imageData = ctx1.getImageData(x, y, 1, 1).data;
  rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
  colorLabel.style.backgroundColor = rgbaColor;
}

function changeColorFill(e) {
  x = e.offsetX;
  y = e.offsetY;
  imageDataFill = ctx1.getImageDataFill(x, y, 1, 1).data;
  rgbaColorFill = 'rgba(' + imageDataFill[0] + ',' + imageDataFill[1] + ',' + imageDataFill[2] + ',1)';
  colorLabelFill.style.backgroundColor = rgbaColorFill;
}

colorStrip.addEventListener("click", click, false);

colorBlock.addEventListener("mousedown", mousedown, false);
colorBlock.addEventListener("mouseup", mouseup, false);
colorBlock.addEventListener("mousemove", mousemove, false);