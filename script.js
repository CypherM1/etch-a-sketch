const containerDiv = document.getElementById('container');



//const innerDiv = document.createElement('div');
//innerDiv.className = 'block';

//containerDiv.appendChild(innerDiv);

let innerDivs = document.createDocumentFragment();

for(var i=0; i < 1024; i++){
   var newDiv = document.createElement('div');
   newDiv.id = 'r'+i;
   newDiv.className = 'block';
   innerDivs.appendChild(newDiv);
}

containerDiv.appendChild(innerDivs);