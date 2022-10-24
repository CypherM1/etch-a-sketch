
//declare all my variables
const containerDiv = document.getElementById('sketchContainer');
const btn2x2 = document.getElementById('2x2');
const btn4x4 = document.getElementById('4x4');
const btn8x8 = document.getElementById('8x8');
const btn16x16 = document.getElementById('16x16');
const btn32x32 = document.getElementById('32x32');
const btn64x64 = document.getElementById('64x64');
const btnRemoveLines = document.getElementById('removeLines');
const clrBtn = document.getElementById('clear');
let gridSquares = document.getElementsByClassName('block');
let innerDivs = document.createDocumentFragment();

//variables to handle mouse down event condition
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


//set events to all my buttons
clrBtn.addEventListener('click', () => clear(gridSquares));
btn2x2.addEventListener('click', () => makeSquares(4));
btn4x4.addEventListener('click', () => makeSquares(16));
btn8x8.addEventListener('click', () => makeSquares(64));
btn16x16.addEventListener('click', () => makeSquares(256));
btn32x32.addEventListener('click', () => makeSquares(1024));
btn64x64.addEventListener('click', () => makeSquares(4096));
btnRemoveLines.addEventListener('click', () => removeLines(gridSquares));

//function creates the grid and adds an eventListener to draw in the squares.
function makeSquares(sqrNum) {
    containerDiv.textContent = '';

    for(var i=0; i < sqrNum; i++){
        var newDiv = document.createElement('div');
        newDiv.className = 'block';
        innerDivs.appendChild(newDiv);
    };

    let sqrWh = 600 / (Math.sqrt(sqrNum));

    containerDiv.appendChild(innerDivs);

    Array.from(gridSquares).forEach(function(gridSquares) {
        gridSquares.style.height = `${sqrWh}px`;
        gridSquares.style.width = `${sqrWh}px`;
        gridSquares.addEventListener('mouseover', changeColor);
        gridSquares.addEventListener('mousedown', changeColor);
    });
    console.log(gridSquares);
};


function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    } else {
        e.target.style.backgroundImage = 'linear-gradient(to right, red, darkred)';
    }; 
};

//removes grid lines
function removeLines(gridSquares) {
    Array.from(gridSquares).forEach(function(gridSquares) {
        gridSquares.style.border = '0px';
    });
};

//clears drawings
function clear(gridSquares) {
    Array.from(gridSquares).forEach(function(gridSquares) {
        gridSquares.style.backgroundImage = '';
    });
};