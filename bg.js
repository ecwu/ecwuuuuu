var picURL = [bg1,bg2,bg3,bg4,bg5,bg6];
function backgroundSet(){
	var position = Math.floor(Math.random()*5);
	document.getElementsByTagName("body")[0].setAttribute("style","background-image: url(https://cdn.ecwuuuuu.com/"+ picURL[position] +".jpg)")
	return picURL[position];
}
