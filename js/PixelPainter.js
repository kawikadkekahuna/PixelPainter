function PixelPainter(width,height){
//////////////Nodes that interact with DOM///////////////////
var TOTAL_PIXEL = width * height;
var ppHtmlDisplayEl = document.getElementById('pixelPainter');
var ppDisplayEl = document.createElement('div');
var ppFragmentEl = document.createElement('fragment');
var ppCanvasEl = document.createElement('canvas');
var ppContext = ppCanvasEl.getContext('2d');
/////////////////////////////////////////////////////////////

// ppContext.fillStyle = "#FF0000";
// ppContext.rect(0,0,32,32);
// ppContext.fill();


for(var i = 0; i< TOTAL_PIXEL; i++){
  var tmpDiv = document.createElement('div');
  tmpDiv.className = 'ppBox';
  ppFragmentEl.appendChild(tmpDiv);

}


ppDisplayEl.appendChild(ppFragmentEl);
ppHtmlDisplayEl.appendChild(ppDisplayEl);
}

PixelPainter(2,4);