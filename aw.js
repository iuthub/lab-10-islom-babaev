function ptokg(p){
	return 0.45359237*p;
}
function kgtop(k){
	return 2.20462262*k;
}
function convert(){
	var i = document.getElementById('in').value;
	var s1 = document.getElementById('sel1');
	var v1 = s1.options[s1.selectedIndex].value;
	var s2 = document.getElementById('sel2');
	var v2 = s2.options[s2.selectedIndex].value;

	if(v1=='kg'){
		if(v2=='kg'){
			document.getElementById('answer').innerHTML=i;
		}else if(v2=='lb')
		{
			document.getElementById('answer').innerHTML=kgtop(i);
		}
	}else if(v1=='lb'){
		if(v2=='kg'){
			document.getElementById('answer').innerHTML=ptokg(i);
		}else if(v2=='lb')
		{
			document.getElementById('answer').innerHTML=i;
		}
	}
}