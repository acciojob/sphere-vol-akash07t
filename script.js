    
function volume_sphere() {
    //Write your code here
	let r = document.getElementById('radius');
	let v = document.getElementById('volume');
	
	let res = (r.value*r.value*r.value*Math.PI*4)/3;
	v.value = res;
	
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
