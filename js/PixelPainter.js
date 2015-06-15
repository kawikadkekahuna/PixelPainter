function PixelPainter(width,height){
//////////////Nodes that interact with DOM///////////////////
var TOTAL_PIXEL = width * height;
var ppHtmlDisplayEl = document.getElementById('pixelPainter');
var ppMainDisplayEl = document.createElement('div');
var ppFragmentEl = document.createElement('fragment');
/////////////////////////////////////////////////////////////

for(var i = 0; i< height; i++){
  var ppTmpRow = document.createElement('div');
  for(var j = 0; j < width; j++){
    var block = document.createElement('div');
    block.className = 'ppBox';
    ppTmpRow.appendChild(block);
  }
  ppMainDisplayEl.appendChild(ppTmpRow);
}







ppMainDisplayEl.appendChild(ppFragmentEl);
ppHtmlDisplayEl.appendChild(ppMainDisplayEl);
}

PixelPainter(10,10);





//   var tmpDiv = document.createElement('div');
//   tmpDiv.className = 'ppBox';
//   ppFragmentEl.appendChild(tmpDiv);
