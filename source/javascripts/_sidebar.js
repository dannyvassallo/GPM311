$(function(){
	$('.navbar-toggle').on('click', function(){
		$('#sidebar').fadeIn( 1 );
		$('#sidebar').animate({left:"0px"});
	});

	$('.navMenux').on('click', function(){
		$('#sidebar').fadeOut( 500 ).animate({left:"-9999px"});
	});

});