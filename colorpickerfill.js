var colorBlockFill = document.getElementById('color-blockFill');
var ctx3 = colorBlockFill.getContext('2d');
var width3 = colorBlockFill.width;
var height3 = colorBlockFill.height;

var colorStripFill = document.getElementById('color-stripFill');
var ctx4 = colorStripFill.getContext('2d');
var width4 = colorStripFill.width;
var height4 = colorStripFill.height;

var colorLabelFill = document.getElementById('color-labelFill');

var x = 0;
var y = 0;
var drag = false;
var rgbaColorFill = 'rgba(255,0,0,1)';

ctx3.rect(0, 0, width3, height3);
fillGradientFill();

ctx4.rect(0, 0, width4, height4);
var grd2 = ctx4.createLinearGradient(0, 0, 0, height3);
grd2.addColorStop(0, 'rgba(255, 0, 0, 1)');
grd2.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
grd2.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
grd2.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
grd2.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
grd2.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
grd2.addColorStop(1, 'rgba(255, 0, 0, 1)');
ctx4.fillStyle = grd2;
ctx4.fill();

function clickFill(e) {
  x = e.offsetX;
  y = e.offsetY;
  var imageDataFill = ctx4.getImageDataFill(x, y, 1, 1).data;
  rgbaColorFill = 'rgba(' + imageDataFill[0] + ',' + imageDataFill[1] + ',' + imageDataFill[2] + ',1)';
  fillGradientFill();
}

function fillGradientFill() {
  ctx3.fillStyle = rgbaColorFill;
  ctx3.fillRect(0, 0, width3, height3);

  var grdWhiteFill = ctx4.createLinearGradient(0, 0, width3, 0);
  grdWhiteFill.addColorStop(0, 'rgba(255,255,255,1)');
  grdWhiteFill.addColorStop(1, 'rgba(255,255,255,0)');
  ctx3.fillStyle = grdWhiteFill;
  ctx3.fillRect(0, 0, width3, height3);

  var grdBlackFill = ctx4.createLinearGradient(0, 0, 0, height3);
  grdBlackFill.addColorStop(0, 'rgba(0,0,0,0)');
  grdBlackFill.addColorStop(1, 'rgba(0,0,0,1)');
  ctx3.fillStyle = grdBlackFill;
  ctx3.fillRect(0, 0, width3, height3);
}

function mousedown(e) {
  drag = true;
  changeColorFill(e);
}

function mousemove(e) {
  if (drag) {
    changeColorFill(e);
  }
}

function mouseup(e) {
  drag = false;
}

function changeColorFill(e) {
  x = e.offsetX;
  y = e.offsetY;
  var imageDataFill = ctx3.getImageDataFill(x, y, 1, 1).data;
  rgbaColorFill = 'rgba(' + imageDataFill[0] + ',' + imageDataFill[1] + ',' + imageDataFill[2] + ',1)';
  colorLabelFill.style.backgroundColor = rgbaColorFill;
}

colorStripFill.addEventListener("clickFill", clickFill, false);

colorBlockFill.addEventListener("mousedown", mousedown, false);
colorBlockFill.addEventListener("mouseup", mouseup, false);
colorBlockFill.addEventListener("mousemove", mousemove, false);