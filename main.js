let grid = document.getElementsByClassName("grid")
let gridContainer = document.getElementById("grid-container")
let createButton = document.getElementById("create-btn")
let xAxis = document.getElementById("x-axis")
let yAxis = document.getElementById("y-axis")
let inputs = document.getElementsByTagName("input")
let inputColor = document.getElementById("input-color")
let gridBorderBtn = document.getElementById("grid-border-btn")
let currentColor = "black"

gridBorderBtn.addEventListener('click', () => {
  let gridCell = document.querySelectorAll(".grid-cell")
  
  gridCell.forEach(x => x.classList.toggle("grid-border"))
  
})

xAxis.addEventListener('keyup', () => {
  yAxis.value = xAxis.value 
  limit()
})

yAxis.addEventListener('keyup', () => {
  xAxis.value = yAxis.value
  limit()
})

createButton.addEventListener("click", () => {
  //remove current grid
   clearGrid()
  
   if(!gridContainer.innerHTML){
     let xValue = xAxis.value
     let yValue = yAxis.value
     createGridCells(xValue, yValue)
  }
})

inputColor.addEventListener("change", () => currentColor = inputColor.value)



function getColor() {
  inputColor.value.addEventListener('change', () => inputColor.value)
}

function setValue(val) {
  xAxis.value = val
  yAxis.value = val
}


function clearGrid() {
  if(gridContainer.innerHTML){
    let clear = prompt('The current grid will be removed type  "OK" to continue')
    if(clear === "OK"){
     gridContainer.innerHTML = ""
    }else{
      return
    }
  }
}

function limit() {
if(xAxis.value >= 100 || yAxis.value >= 100){
   prompt("dont")
 }
}

 
function createGridCells(X, Y) {
  //gridContainer = the div containing the grid
  //grid = the grid containing all grid cells
  //gridcells = the pixels
  
  gridContainer.style.gridTemplateRows = `repeat(${Y}, 1fr)`
  gridContainer.style.gridTemplateColumns = `repeat(${X}, 1fr)`
  
  
  for (var i = 0; i < X * Y; i++) {
    let gridCell = document.createElement("div")
    gridCell.setAttribute("class", "grid-cell")
    gridCell.addEventListener('click', () => gridCell.style.backgroundColor = currentColor )
    gridContainer.appendChild(gridCell)
  }
  
}





window.addEventListener('load', createGridCells(8,8))
