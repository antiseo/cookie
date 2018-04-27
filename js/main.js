window.onload = function () {
	var cc = Cookies.get();
	if (cc['background']) {
		$("body").css('background', cc['background']);
	}
	if (cc['color']) {
		$("body").css('color', cc['color']);
	}
}
function checkType (divId) {
	var typeOfBox = divId.slice(0, 3);
	var colorOfBox = divId.toLowerCase().slice(3);
	if (typeOfBox == "bgc") {
		var arr = ['background', colorOfBox];
	}
	else if(typeOfBox == "col"){
		var arr = ['color', colorOfBox];
	}
	else{
		return;
	}
	return arr;
}
$(".footer__panel").find('div').click(function(event) {
	var thisId = $(this).attr("id");
	var actionCss = checkType (thisId)[0];
	var thisColor = checkType (thisId)[1];

	$("body").css(actionCss, thisColor);
	Cookies.set(actionCss, thisColor, { expires: 1, path: '/' });
});