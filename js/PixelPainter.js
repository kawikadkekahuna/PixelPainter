window.onload = function(event) {

  window.addEventListener('hashchange', renderPixelPainter);


  function PixelPainter(width, height) {

    //////////////Main DOM Nodes & Variables///////////////////
    var TOTAL_PIXEL = width * height;
    var counter = 0;
    var ppTmpRow, singleBoxEl, i, j;
    var ppHtmlDisplayEl = document.getElementById('pixelPainter');
    var ppMainDisplayEl = document.createElement('div');
    var ppColorDisplayEl = document.createElement('div');
    var saveButton = document.createElement('div');
    var ppColorArray = ['black', 'blue', 'red', 'orange', 'green', 'yellow', 'aqua', 'white', ];
    var ppColorRunner = 0;
    var currentColorSelected;
    var savedColors = {};
    /////////////////////////////////////////////////////////////

    //Generates main grid and appends to MainDisplayEl
    for (i = 0; i < height; i++) {
      ppTmpRow = document.createElement('div');

      for (j = 0; j < width; j++) {
        //Attributes
        singleBoxEl = document.createElement('div');
        singleBoxEl.className = 'ppMainBox';
        singleBoxEl.id = 'box' + counter;

        //Sets the bg to current color selected;
        singleBoxEl.addEventListener('click', function() {
          this.style.background = currentColorSelected;
        })

        counter++;
        ppTmpRow.appendChild(singleBoxEl);
      }
      ppMainDisplayEl.appendChild(ppTmpRow);
    }

    counter = 0; // RESETS COUNTER;

    //Generates color grid and appends to ColorDisplayEl
    for (i = 0; i < 4; i++) {
      ppTmpRow = document.createElement('div');
      for (j = 0; j < 2; j++) {
        singleBoxEl = document.createElement('div');

        //Attributes
        singleBoxEl.color = ppColorArray[ppColorRunner];
        singleBoxEl.className = 'ppColorBox'
        singleBoxEl.id = 'color' + counter;
        singleBoxEl.style.background = ppColorArray[ppColorRunner];

        //On Click
        singleBoxEl.addEventListener('click', function() {
          currentColorSelected = this.color;
        })

        //Counters
        ppColorRunner++;
        counter++;

        ppTmpRow.appendChild(singleBoxEl);
      }
      ppColorDisplayEl.appendChild(ppTmpRow);
    }

    saveButton.addEventListener('click', function() {
      scanGrid();
    });

    //Functionality Buttons
    var ppClearBtn = document.createElement('Button');
    ppClearBtn.innerHTML = 'CLEAR';
    ppClearBtn.addEventListener('click', function() {
      for (i = 0; i < TOTAL_PIXEL; i++) {
        document.getElementById('box' + i).style.background = '';
      }
    });

    var ppEraseBtn = document.createElement('Button');
    ppEraseBtn.innerHTML = 'ERASE';
    ppEraseBtn.addEventListener('click', function() {
      currentColorSelected = 'transparent';
    });

    function scanGrid() {
      /**
      Scan grid to look for objects that have colors other than white based on style.background
        -if true, store as KV pair into an object.
        -else if no color is stored, store as white.
      **/
      savedColors = {};
      for (var i = 0; i < TOTAL_PIXEL; i++) {
        var id = 'box' + i;
        var box = document.getElementById(id);
        if (box.style.background) {
          var color = box.style.background.toString().split(' ');
          color = color[0];
          savedColors[id] = color;
        }
      }

      var stringified = JSON.stringify(savedColors);
      console.log('stringified', stringified);
      var encodedString = window.btoa(stringified);
      window.location.hash = '#' + encodedString;


    }


    saveButton.innerHTML = 'save';
    ppHtmlDisplayEl.appendChild(saveButton);
    ppHtmlDisplayEl.appendChild(ppClearBtn);
    ppHtmlDisplayEl.appendChild(ppEraseBtn);
    ppHtmlDisplayEl.appendChild(ppColorDisplayEl);
    ppHtmlDisplayEl.appendChild(ppMainDisplayEl);
    if (window.location.hash) {
      console.log('here');
      renderPixelPainter(window.location.hash);
    }
  }

  function rerenderGrid(hash) {
    var decodedString = window.atob(hash);
    decodedString = JSON.parse(decodedString);
    for (var key in decodedString) {
      console.log('here');
      console.log(document.getElementById(key))
      var boxEl = document.getElementById(key);
      boxEl.style.background = decodedString[key];
    }
  }

  function renderPixelPainter(event) {
    var hash = window.location.hash;
    console.log(hash);
    // console.log('hash',hash);
    hash = /(#\w+=*)/g.exec(hash);
    hash = hash[0];
    hash = hash.substring(1, hash.length);
    rerenderGrid(hash);
  }


  PixelPainter(10, 10);


  //   var tmpDiv = document.createElement('div');
  //   tmpDiv.className = 'ppBox';
  //   ppFragmentEl.appendChild(tmpDiv);
}