function PixelPainter(width,height){
//////////////Main DOM Nodes & Variables///////////////////
var WIDTH;
var HEIGHT;
var GRIDSIZE; //Default 25
var colorSwatch;
/////////////////////////////////////////////////////////////
switch(arguments.length){
    case 1: 
    if(typeof(width) === 'object'){
      if(width.hasOwnProperty('height') && width.hasOwnProperty('width') && width.hasOwnProperty('gridSize') && width.hasOwnProperty('colorSwatch')){
      this.WIDTH = width.width;
      this.HEIGHT = width.height;
      this.GRIDSIZE = width.gridSize;
      this.colorSwatch = width.colorSwatch;
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
    }

  }  
}

