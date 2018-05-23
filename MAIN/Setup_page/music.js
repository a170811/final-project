var vol;
document.getElementsByClassName("slidecontainer").touchmove=function(){
	vol=document.getElementById("volrange").value/100;
	document.getElementById("music").volume=vol; 
	alert("change");
}

document.getElementById("volrange").onmouseup=function(){
	vol=document.getElementById("volrange").value/100;
	document.getElementById("music").volume=vol; 
}