
let sizeSlider = document.getElementById('sizeSlide');
let gridContainer = document.getElementById('GridContainer');

sizeSlider.addEventListener('input',sizeValue);
document.getElementById('sizeValue').innerText = sizeSlider.value + ' x ' + sizeSlider.value;

function sizeValue(){
    document.getElementById('sizeValue').innerText = sizeSlider.value + ' x ' + sizeSlider.value; 
}

function createBox(){
    for(let i=0;i<=sizeSlider.value;i++){
        const box = document.createElement('div')
        box.classList.add('box')
        gridContainer.append('box')
    }
}
