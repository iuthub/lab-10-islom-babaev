function bmi(w, h){
	return 703 * w/(h*h);
}
function calculate(){
	var w = document.getElementById('weight').value;
	var h = document.getElementById('height').value;
	var result = bmi(w,h);
	var msg="";
	if(result<18){
		msg = 'Underweight';
	}else if(result<25){
		msg='normal';
	}else if(result<30){
		msg = 'Overweight';
	}else msg = 'Obese';
	document.getElementById('score').innerHTML=result;
	document.getElementById('type').innerHTML=msg;
}