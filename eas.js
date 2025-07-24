 
let gridSize = 16;

function createGrid(size) {
const board = document.querySelector("#board");
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.setAttribute('class', 'column');
        
    for (let j = 1; j <= size; j++) {
        let row = document.createElement("div");
        row.setAttribute('class', 'row');
        column.appendChild(row);
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = getRandomColor();
        })
         
    };
    board.appendChild(column);
    }
}; 

createGrid(gridSize);

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

