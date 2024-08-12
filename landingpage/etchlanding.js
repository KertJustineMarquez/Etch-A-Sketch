const openButton = document.getElementById('trigger-modal');
const closeButton = document.getElementById('close-modal');
const resetButton = document.getElementById('reset');

function toggleModal() {
  const modalDiv = document.querySelector('.popup-modal');
  const backdrop = document.querySelector('.backdrop')
  modalDiv.classList.toggle('show');
  backdrop.classList.toggle('show');
}

var columnValue = 0;
var rowValue = 0;

function sidesValue() {
    columnValue = document.getElementById('numofsides1').value;
    rowValue = document.getElementById('numofsides2').value;
    displayGrid();
}

const containerGrid = document.getElementById('container');
const containerItems = document.getElementsByClassName('grid-item')

function displayGrid() {
  containerGrid.innerHTML = '';
  containerGrid.style.gridTemplateColumns = `repeat(${columnValue}, auto)`;
  containerGrid.style.gridTemplateRows = `repeat(${rowValue}, auto)`;
  const containerWidth = columnValue * 30;
  const containerHeight = rowValue * 30; 
  
  containerGrid.style.width = `${containerWidth}px`;
  containerGrid.style.height = `${containerHeight}px`;
  
  for (let i = 1; i <= columnValue; i++) {
      for (j = 1; j <= rowValue; j++) {
          const gridItem = document.createElement('div')
          gridItem.classList.add('grid-item')
          containerGrid.appendChild(gridItem)
      }
  }

  for (let k = 0; k < containerItems.length; k++) {
    containerItems[k].onmouseover = function () {
        this.style.backgroundColor = 'green';
    };
  }
}

function resetColor() {
  for (let l = 0; l < containerItems.length; l++) {
        containerItems[l].style.backgroundColor = '';
  }
}

openButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', sidesValue);
resetButton.addEventListener('click', resetColor)

