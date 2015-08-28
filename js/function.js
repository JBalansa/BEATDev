$(document).ready(function(){

	$("#bio").on('click',function(){
		$("#info1").removeClass('engback agback techback');
		$("#bio_i,#eng_i,#ag_i,#tech_i").removeClass('show');
		$("#check").addClass('cwhite');
		$("#info1").addClass('scienceback');
		$("#bio_i").addClass('show');
	});

	$("#eng").on('click',function(){
		$("#info1").removeClass('scienceback agback techback');
		$("#bio_i,#eng_i,#ag_i,#tech_i").removeClass('show');
		$("#check").addClass('cwhite');
		$("#info1").addClass('engback');
		$("#eng_i").addClass('show');
	});

	$("#ag").on('click',function(){
		$("#info1").removeClass('scienceback engback techback');
		$("#bio_i,#eng_i,#ag_i,#tech_i").removeClass('show');
		$("#check").addClass('cwhite');
		$("#info1").addClass('agback');
		$("#ag_i").addClass('show');
	});

	$("#tech").on('click',function(){
		$("#info1").removeClass('scienceback engback agback');
		$("#bio_i,#eng_i,#ag_i,#tech_i").removeClass('show');
		$("#check").addClass('cwhite');
		$("#info1").addClass('techback');
		$("#tech_i").addClass('show');
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