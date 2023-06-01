// Write your code here!

let meow = document.querySelector('#main');
meow.remove();

const newHeader = document.createElement("H1"); 
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = 'Mishel is the champion';
document.body.append(newHeader);



