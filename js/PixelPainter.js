function PixelPainter(width,height){

//////////////Main DOM Nodes & Variables///////////////////
var TOTAL_PIXEL = WIDTH * HEIGHT;
var gridRunner = 0;
var colorRunner = 0;
var currentColorSelected;
var ppHtmlDisplayEl = document.getElementById('pixelPainter');
var ppMainDisplayEl = document.createElement('div');
var ppColorDisplayEl = document.createElement('div');
var WIDTH;
var HEIGHT;
var GRIDSIZE; //Default 25
var COLORSWATCH = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];;
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
    singleBoxEl.addEventListener('click',function(){
      this.style.background = currentColorSelected;
    });

    gridRunner++;
    ppTmpRow.appendChild(singleBoxEl);
  }
  ppMainDisplayEl.appendChild(ppTmpRow);
}

//Generates Color Swatch
for(i = 0 ; i <4 ; i++){
  ppTmpRow = document.createElement('div');
  for(j = 0; j < 4; j++){
    singleBoxEl = document.createElement('div');

    //Attributes
    singleBoxEl.color = COLORSWATCH[colorRunner];
    singleBoxEl.className = 'ppColorBox'
    singleBoxEl.id = 'color'+gridRunner;
    singleBoxEl.style.background = COLORSWATCH[colorRunner];

    //On Click
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


ppHtmlDisplayEl.appendChild(ppClearBtn);
ppHtmlDisplayEl.appendChild(ppEraseBtn);
ppHtmlDisplayEl.appendChild(ppColorDisplayEl);
ppHtmlDisplayEl.appendChild(ppMainDisplayEl);
}

