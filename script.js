    
function volume_sphere() {
    //Write your code here

	event.preventDefault();
	let r = document.getElementById('radius');
	let v = document.getElementById('volume');
	
	let res =(r.value*r.value*r.value*Math.PI*4)/3;
	v.value = res.toFixed(4);
	
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
