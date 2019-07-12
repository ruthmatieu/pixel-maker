// Select color input
// Select size input
var table = document.getElementById("pixelCanvas");
var colorPicker = document.getElementById("colorPicker");
var chosenColor = colorPicker.value; // sets color to defaul(black);


function makeGrid(height, width) {
  table;
  var grid = '';

  for (var i = 0; i < height; i++){
    grid += '<tr class="row-' + i + '">';
    for (var j = 0; j < width; j++){
      grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
    }
    grid += '</tr>';
  }
  table.innerHTML = grid;
  addClickEventToCells();
}

// When size is submitted by the user, call makrGrid()
function formSubmission() {
    event.preventDefault();
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

// Click events are added to cells
function addClickEventToCells() {
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click",  function(event) {
      var chosenCell = event.target;
      chosenCell.style.backgroundColor = chosenColor;
    });
  }
}

// Color is returned to user upon selection
colorPicker.addEventListener("input", function() {
  chosenColor = colorPicker.value;
  }, false);

document.getElementById('sizePicker').onsubmit = function() {
  formSubmission();
};
// Your code goes here!
