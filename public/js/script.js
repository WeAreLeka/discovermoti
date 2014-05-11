$(function(){

	var url = window.location.pathname;
	var activePage = url;

	$('.masthead-nav li a').each(function(){
		var href = $(this).attr('href');
		if (activePage === href) {
			$('#home').removeClass('active');
			$(this).parent().addClass('active');
		}
	});
});
