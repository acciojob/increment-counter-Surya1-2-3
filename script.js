//your JS code here. If required.
function incrementBtn(){
	var para_element=document.getElementById("counter");
	var number=Number(para_element.innerHTML);
	alert(number);
	number=number+1
	para_element.innerHTML=number
}