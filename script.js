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



clrBtn.addEventListener('click', () => clear(gridSquares));
btn2x2.addEventListener('click', () => makeSquares(4));
btn4x4.addEventListener('click', () => makeSquares(16));
btn8x8.addEventListener('click', () => makeSquares(64));
btn16x16.addEventListener('click', () => makeSquares(256));
btn32x32.addEventListener('click', () => makeSquares(1024));
btn64x64.addEventListener('click', () => makeSquares(4096));
btnRemoveLines.addEventListener('click', () => removeLines(gridSquares));


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
        gridSquares.addEventListener('mouseover', () => changeColor(gridSquares));
    });

};

function changeColor(gridSquares) { 
    gridSquares.style.backgroundColor = 'red';
};

function removeLines(gridSquares) {
    Array.from(gridSquares).forEach(function(gridSquares) {
        gridSquares.style.border = '0px';
    });
};

function clear(gridSquares) {
    Array.from(gridSquares).forEach(function(gridSquares) {
        gridSquares.style.backgroundColor = '';
    });
};