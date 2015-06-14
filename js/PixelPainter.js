function PixelPainter(width,height){
var pixelPainterEl = document.getElementById('pixelPainter');
var displayGridEl = document.createElement('canvas');
displayGridEl.id = displayGridElId;

this.addBox = function(){
  var boxDiv = document.createElement('div');
  boxDiv.id = item;
  boxDiv.className = 'dead'; //Alive for filled, dead for blank
  boxDiv.style.top = 10;
  boxDiv.style.left = 20;
  displayGridEl.appendChild(boxDiv);
  console.log('called');
}

this.addBox();
pixelPainterEl.appendChild(displayGridEl);

}

