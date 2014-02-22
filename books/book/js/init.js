function init(){
	$('#tab-container').easytabs({animate: true}); 
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


$(document).ready(function() {
	init();
	initEventHandlers();
});