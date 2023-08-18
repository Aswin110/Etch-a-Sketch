
let sizeSlide = document.getElementById('sizeSlide');
let gridContainer = document.getElementById('gridContainer');
const colorPicker = document.getElementById('colorPicker');
const colorMode = document.getElementById('colorMode');
const clearGrid = document.getElementById('clear');
// let box = document.querySelector('box');

sizeSlide.addEventListener('input', sizeValue);
colorMode.addEventListener('click', colorChange);
clearGrid.addEventListener('click', clear);

document.getElementById('sizeValue').innerText = sizeSlide.value + ' x ' + sizeSlide.value;
resetGrid();

function resetGrid(){  
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let boxes = new Array(sizeSlide.value**2)
    for(let i = 0; i < boxes.length; i++){
        const box = document.createElement('div')
        gridContainer.appendChild(box)
        box.classList.add('box')
        box.style = `width: ${500/sizeSlide.value}px; height: ${500/sizeSlide.value}px;` 
        // console.log('slide:',sizeSlide.value, box)
        gridContainer.style = `grid-template-columns: repeat(auto-fill, ${500/sizeSlide.value}px);`
        box.addEventListener("mouseover", (e)=>fillGrid(e.currentTarget))
    }
    // gridContainer.style = `grid-template-rows: repeat(auto-fill, ${64/sizeSlide.value}%)`
    // gridContainer.style = `grid-template-columns: repeat(auto-fill, ${64/sizeSlide.value}%)`
    // console.log(64/sizeSlide.value)
}

function sizeValue(){
    document.getElementById('sizeValue').innerText = sizeSlide.value + ' x ' + sizeSlide.value;
    resetGrid(); 
}

function colorChange(){
  const colorValue = colorPicker.value;
  console.log('Selected color value:', colorValue);
  const filledElement = document.querySelector('.filled');
  if(filledElement){
    document.querySelector('.filled').style.backgroundColor = colorValue;
  }else{
    console.log('element with class .filled not found');
  }
};

function fillGrid(box){
    box.classList.remove('unfilled');
    box.classList.add('filled');   
}

function clear(){
    boxes.forEach(box => {
        box.classList.remove('filled');
        box.classList.add('unfilled');  
    });
}

function eraseGrid(){
    
}