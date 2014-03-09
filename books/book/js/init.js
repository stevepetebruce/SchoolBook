function init(){
	// $('#tab-container').easytabs({animate: true}); 
	$('.noannim').hide();
}

function initEventHandlers(){
	$('.annim p').click(function(){
		$('.annim').hide();
		$('.noannim').show();
	});

	$('.noannim p').click(function(){
		$('.annim').show();
		$('.noannim').hide();
	});
}

function animate(){

	// cant get this to work together:
	// $(".animated_text").lettering(); 
	$('.tlt').textillate({ in: { effect: 'fadeIn', shuffle: true } });

}


$(document).ready(function() {
	init();
	initEventHandlers();
	animate();
});