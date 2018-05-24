document.getElementById('rectangle').onclick = zoom;
function zoom(){
	var w = document.getElementById('rectangle').offsetWidth;
	w = 1.25*w;
	var val = w+'px';
	document.getElementById('rectangle').style.width = val;
	document.getElementById('rectangle').style.height = val;
	
}