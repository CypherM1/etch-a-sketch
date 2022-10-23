const containerDiv = document.getElementById('container');
let innerDivs = document.createDocumentFragment();
let sqrNum = prompt('How many squares do you want?')
let sqrWh = setWh(sqrNum);
console.log(sqrWh);

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
});