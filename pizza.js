document.getElementById("submit").onclick = convert;
function price(s,m,l){
	return 8.99*s + 10.99*m + 12.99*l;
}
function tip(pr, t){
	return pr*(1+t/100);
}
function convert(){
	var s = document.getElementById('small').value;
	var m = document.getElementById('medium').value;
	var l = document.getElementById('large').value;
	var total = 0;
	total  = total + price(s,m,l);
	var tips = 0;
	var radios = document.getElementsByName('tip');

	for (var i = 0, length = radios.length; i < length; i++)
	{if (radios[i].checked)
		{
		tips = tip(total, radios[i].value);
		break;
		}
	}
	document.getElementById('price').innerHTML=tips;
}