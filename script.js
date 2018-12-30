
function OnOpen(){
	var burger = document.getElementsByClassName("burger_menu");
	var slideBurger = document.getElementsByClassName("burger");

/*	for(var i=0; i < goOut.length; i++){
		goOut[i].style.display = 'none';
		console.log('del');
	}*/
/*	for(var j=1000;j>=0; j--){
		setTimeout(Slide, 1);
	}
	var k;
	function Slide(){
		slideBurger[0].style.top = j + "%";
	}*/
	slideBurger[0].style.top = "0";
}
function OnClose(){
	var burger = document.getElementsByClassName("burger_menu");
	var slideBurger = document.getElementsByClassName("burger");
	slideBurger[0].style.top = "-1000%";
}