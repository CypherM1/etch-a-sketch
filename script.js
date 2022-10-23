const containerDiv = document.getElementById('sketchContainer');
const btn2x2 = document.getElementById('2x2');
const btn4x4 = document.getElementById('4x4');
const btn8x8 = document.getElementById('8x8');
const btn16x16 = document.getElementById('16x16');
const btn32x32 = document.getElementById('32x32');
const clrBtn = document.getElementById('clear');
let widthHeight = document.getElementsByClassName('block');
let innerDivs = document.createDocumentFragment();



clrBtn.addEventListener('click', () => clear(widthHeight));
btn2x2.addEventListener('click', () => makeSquares(4));
btn4x4.addEventListener('click', () => makeSquares(16));
btn8x8.addEventListener('click', () => makeSquares(64));
btn16x16.addEventListener('click', () => makeSquares(256));
btn32x32.addEventListener('click', () => makeSquares(1024));

function makeSquares(sqrNum) {
    for(var i=0; i < sqrNum; i++){
        var newDiv = document.createElement('div');
        newDiv.id = 'r'+i;
        newDiv.className = 'block';
        innerDivs.appendChild(newDiv);
    }

    let sqrWh = 600 / (Math.sqrt(sqrNum));

    containerDiv.appendChild(innerDivs);

    Array.from(widthHeight).forEach(function(widthHeight) {
        widthHeight.style.height = `${sqrWh}px`;
        widthHeight.style.width = `${sqrWh}px`;
        widthHeight.addEventListener('mousedown', () => changeColor(widthHeight));
        widthHeight.addEventListener('mouseover', () => changeColor(widthHeight));
    });

};

function changeColor(widthHeight) {
    widthHeight.style.backgroundColor = 'red';
}

function clear(widthHeight) {
    Array.from(widthHeight).forEach(function(widthHeight) {
        widthHeight.style.backgroundColor = '';
    });
}