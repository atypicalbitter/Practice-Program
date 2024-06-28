let a; 
let b;
let c;


document.getElementById('submitButton').onclick = function(){
a = document.getElementById('a-TextBox').value; 
a = Number(a); 

b = document.getElementById('b-TextBox').value; 
b = Number(b); 

c = Math.sqrt(Math.pow( a, 2) + Math.pow( b, 2));

document.getElementById('c-Label').innerHTML = 'Side C is ' + c;

}; 






















