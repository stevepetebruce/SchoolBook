// JavaScript Document


//function EasyPeasyParallax() {
//	scrollPos = $(this).scrollTop();
	//$('#banner').css({
	//	'background-position' : '50% ' + (-scrollPos/4)+"px"
	//});
	//$('#bannertext').css({
	//	'margin-top': (scrollPos/4)+"px",
	//	'opacity': 1-(scrollPos/250)
	//});
//}






//$(document).ready(function(){
//	$(window).scroll(function() {
	//	EasyPeasyParallax();
	//});
//});








//$w = $(window);
//$square = $('#bannertext');

//$w.scroll(function(){
  //  $square.css('left',$w.scrollTop());
//});







(function(){
	var ua = navigator.userAgent,
		isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

	if (isMobileWebkit) {
		$('html').addClass('mobile');
	}

	$(function(){
		var iScrollInstance;

		if (isMobileWebkit) {
			iScrollInstance = new iScroll('wrapper');

			$('#scroller').stellar({
				scrollProperty: 'transform',
				horizontalScrolling: false,
				verticalOffset: 150
			});
		} else {
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 150
			});
		}
	});

})();