const containerDiv = document.getElementById('sketchContainer');
const clrBtn = document.getElementById('clear');
let innerDivs = document.createDocumentFragment();
let sqrNum = prompt('How many squares do you want?')
let sqrWh = setWh(sqrNum);

clrBtn.addEventListener('click', () => clear(widthHeight))


for(var i=0; i < sqrNum; i++){
   var newDiv = document.createElement('div');
   newDiv.id = 'r'+i;
   newDiv.className = 'block';
   innerDivs.appendChild(newDiv);
}

function setWh(num) {
    let numSq = Math.sqrt(num);
    wH = 600 / numSq;
    return wH;
}

containerDiv.appendChild(innerDivs);

var widthHeight = document.getElementsByClassName('block');
Array.from(widthHeight).forEach(function(widthHeight) {
    widthHeight.style.height = `${sqrWh}px`;
    widthHeight.style.width = `${sqrWh}px`;
    widthHeight.addEventListener('mousedown', () => changeColor(widthHeight));
});



function changeColor(widthHeight) {
    widthHeight.addEventListener('mouseover', widthHeight.style.backgroundColor = 'red');
}

function clear(widthHeight) {
    Array.from(widthHeight).forEach(function(widthHeight) {
        widthHeight.style.backgroundColor = '';
    });
}