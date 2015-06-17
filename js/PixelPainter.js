function PixelPainter(width,height){

//////////////Main DOM Nodes & Variables///////////////////
var gridRunner = 0;
var colorRunner = 0;
var currentColorSelected;
var ppHtmlDisplayEl = document.getElementById('pixelPainter');
var ppMainDisplayEl = document.createElement('div');
var ppColorDisplayEl = document.createElement('div');
var WIDTH;
var HEIGHT;
var GRIDSIZE = 25; //Default 25
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
var TOTAL_PIXEL = this.WIDTH * this.HEIGHT;


//Generates main grid and appends to MainDisplayEl
for(i = 0; i< this.HEIGHT; i++){
  ppTmpRow = document.createElement('div');
  
  for(j = 0; j < this.WIDTH; j++){
    //Attributes
    singleBoxEl = document.createElement('div');
    singleBoxEl.className = 'ppMainBox';
    if(arguments.length === 1){
    this.singleBoxEl.style.height = this.GRIDSIZE+'px';
    this.singleBoxEl.style.width = this.GRIDSIZE+'px';
    }
    singleBoxEl.id = 'box' + gridRunner;

    //Sets the bg to current color selected;

    //****************EDDDDITTTT*********************/
    singleBoxEl.addEventListener('mousedown',function(){
      console.log(document.body.onmousedown);
      this.style.background = currentColorSelected;

    },false);
    


    gridRunner++;
    ppTmpRow.appendChild(singleBoxEl);
  }
  ppMainDisplayEl.appendChild(ppTmpRow);
}


//Generates Color Swatch
for(i = 0 ; i <this.COLORSWATCH.length / 6 ; i++){
  ppTmpRow = document.createElement('div');
  for(j = 0; j < 6; j++){
    singleBoxEl = document.createElement('div');

    //Attributes
    singleBoxEl.color = this.COLORSWATCH[colorRunner];
    singleBoxEl.className = 'ppColorBox'
    singleBoxEl.id = 'color'+gridRunner;
    singleBoxEl.style.background = this.COLORSWATCH[colorRunner];

    //Event Listener
    singleBoxEl.addEventListener('click',function(){
      currentColorSelected = this.color;
    })

    //Counters
    colorRunner++;
    gridRunner++;

    ppTmpRow.appendChild(singleBoxEl);
  }
  ppColorDisplayEl.appendChild(ppTmpRow);
}

//Functionality Buttons
var ppClearBtn = document.createElement('Button');
    ppClearBtn.innerHTML = 'CLEAR';
    ppClearBtn.addEventListener('click',function(){
    for(i = 0; i< TOTAL_PIXEL; i++){
      document.getElementById('box'+i).style.background='transparent';
    }
  });

var ppEraseBtn = document.createElement('Button');
    ppEraseBtn.innerHTML = 'ERASE';
    ppEraseBtn.addEventListener('click',function(){
    currentColorSelected = 'transparent';
  });

console.log(TOTAL_PIXEL);
ppHtmlDisplayEl.appendChild(ppClearBtn);
ppHtmlDisplayEl.appendChild(ppEraseBtn);
ppHtmlDisplayEl.appendChild(ppColorDisplayEl);
ppHtmlDisplayEl.appendChild(ppMainDisplayEl);
}












//////Testing//////////
var testObj = {
  width: 10,
  height: 10,
  gridSize: 10,
  colorSwatch: ['red','blue','green','purple','orange','yellow',"AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]
}

PixelPainter(testObj);