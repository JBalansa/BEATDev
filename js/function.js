$(document).ready(function(){
	$("#bio").on('click',function(){
		$("#info1").toggleClass("scienceback");
		$("#prog_info").toggleClass("cwhite");
		$("#bio_i").toggleClass("show");
		$("#proghead").toggleClass("cwhite");
		$("#eng,#ag,#tech").toggleHide(300);
	});

	$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

	}); //end smoothscroll

}); //end ready