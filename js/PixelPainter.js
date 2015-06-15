function PixelPainter(width,height){
//////////////Main DOM Nodes & Variables///////////////////
var TOTAL_PIXEL = width * height;
var counter = 0;
var ppTmpRow,singleBoxEl,i,j;
var ppHtmlDisplayEl = document.getElementById('pixelPainter');
var ppMainDisplayEl = document.createElement('div');
var ppColorDisplayEl = document.createElement('div'); 
var ppColorArray = ['black','blue','red','orange','green','yellow','aqua','white'];
var ppColorRunner = 0;
var currentColorSelected;
/////////////////////////////////////////////////////////////

//Generates main grid and appends to MainDisplayEl
for(i = 0; i< height; i++){
  ppTmpRow = document.createElement('div');
  
  for(j = 0; j < width; j++){
    //Creates individual boxes
    singleBoxEl = document.createElement('div');
    singleBoxEl.className = 'ppMainBox';
    singleBoxEl.id = 'box' + counter;
    counter++;
    ppTmpRow.appendChild(singleBoxEl);
  }
  ppMainDisplayEl.appendChild(ppTmpRow);
}

counter = 0; // RESETS COUNTER;

//Generates color grid and appends to ColorDisplayEl
for(i = 0 ; i < 4; i++){
  ppTmpRow = document.createElement('div');
  for(j = 0; j < 2; j++){
    singleBoxEl = document.createElement('div');
    singleBoxEl.className = 'ppColorBox'
    singleBoxEl.id = 'color'+counter;
    singleBoxEl.style.background = ppColorArray[ppColorRunner];
    ppColorRunner++;
    counter++;
    ppTmpRow.appendChild(singleBoxEl);
  }
  ppColorDisplayEl.appendChild(ppTmpRow);
}







ppHtmlDisplayEl.appendChild(ppColorDisplayEl);
ppHtmlDisplayEl.appendChild(ppMainDisplayEl);
}

PixelPainter(10,10);





//   var tmpDiv = document.createElement('div');
//   tmpDiv.className = 'ppBox';
//   ppFragmentEl.appendChild(tmpDiv);
