let gridSize = 16;
const solidColor = document.querySelector("#color-select");
const resizeBtn = document.querySelector("#resize");
let drawColorBtns = document.querySelectorAll(".color-btn");
let currentColorSetting;

drawColorBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentColorSetting = btn.id;
  })
})

resizeBtn.addEventListener('click', () => {
    let newSize = prompt("Select Size (1-100)");
    const defaultGrid = document.querySelector("#grid")
    defaultGrid.remove();
    gridSize = newSize;
    createGrid(gridSize);
})


function createGrid(size) {
const board = document.querySelector("#board");
let defaultGrid = document.createElement("div");
defaultGrid.setAttribute('id', 'grid');
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.setAttribute('class', 'column');
        
    for (let j = 1; j <= size; j++) {
        let row = document.createElement("div");
        row.setAttribute('class', 'row');
        column.appendChild(row);
          row.addEventListener('mouseover', () => {
            switch (currentColorSetting) {
              case "solid-color":
                row.style.backgroundColor = solidColor.value;
                break;
              
              case "rgb-color":
                row.style.backgroundColor = getRandomColor();
                break;

              default:
                row.style.backgroundColor = solidColor.value;
                break;
            }
          });

        /*
         row.addEventListener('mouseover', () => {
          let color = (rgbColor === true) ? getRandomColor() : solidColor.value;
          row.style.backgroundColor = color;
          
          
        }) */
         
    };
    defaultGrid.appendChild(column);
    }
    board.appendChild(defaultGrid);
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


function clearGrid() {
  const currentGrid = document.querySelector("#grid");
  currentGrid.remove();
  createGrid(gridSize);
}

const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener('click', () => {
  clearGrid();
  const container = document.querySelector("#container");
  container.classList.add('box');
  setTimeout(() => {
    container.classList.remove('box');}, 500)
  });

