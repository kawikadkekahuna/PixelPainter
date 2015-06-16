function PixelPainter(width,height){

//////////////Main DOM Nodes & Variables///////////////////
var gridRunner = 0;
var colorRunner;

var ppHtmlDisplayEl = document.getElementById('pixelPainter');
var ppMainDisplayEl = document.createElement('div');
var ppColorDisplayEl = document.createElement('div');
var WIDTH;
var HEIGHT;
var GRIDSIZE; //Default 25
var COLORSWATCH;
/////////////////////////////////////////////////////////////

switch(arguments.length){
  case 1: 
    if(typeof(width) === 'object'){
      if(width.hasOwnProperty('height') && width.hasOwnProperty('width') && width.hasOwnProperty('gridSize') && width.hasOwnProperty('colorSwatch')){
      this.WIDTH = width.width;
      this.HEIGHT = width.height;
      this.GRIDSIZE = width.gridSize;
      this.COLORSWATCH = width.colorSwatch;
      break;
      }
    }else{
      throw new TypeError('Invalid arguments');
      break;
    }

  case 2:
    if(typeof(width) === 'number' && typeof(height) === 'number'){
      break;
    }else{ 
      throw new TypeError('Invalid arguments');
      break;
    }
}

//Generates main grid and appends to MainDisplayEl
for(i = 0; i< height; i++){
  ppTmpRow = document.createElement('div');
  
  for(j = 0; j < width; j++){
    //Attributes
    singleBoxEl = document.createElement('div');
    singleBoxEl.className = 'ppMainBox';
    singleBoxEl.id = 'box' + gridRunner;

    //Sets the bg to current color selected;
    singleBoxEl.addEventListener('click',function(){
      this.style.background = currentColorSelected;
    })

    gridRunner++;
    ppTmpRow.appendChild(singleBoxEl);
  }
  ppMainDisplayEl.appendChild(ppTmpRow);
}



ppMainDisplayEl.appendChild(ppTmpRow);
ppHtmlDisplayEl.appendChild(ppMainDisplayEl);
}

