function PixelPainter(width,height){
//////////////Nodes that interact with DOM///////////////////
var ppHtmlDisplayEl = document.getElementById('pixelPainter');
var ppDisplayEl = document.createElement('div');
var ppCanvasEl = document.createElement('canvas');
var ppContext = ppCanvasEl.getContext('2d');
/////////////////////////////////////////////////////////////


ppContext.fillStyle = "#FF0000";
ppContext.rect(0,0,32,32);
ppContext.fill();


ppDisplayEl.appendChild(ppCanvasEl);
ppHtmlDisplayEl.appendChild(ppDisplayEl);
}

PixelPainter(2,4);