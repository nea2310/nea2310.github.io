$(function(){
	let answers = $('.answer');

	$('.ask').on('click', function(){
		let current = $(this).nextAll('.answer').slideToggle(500);
		answers.not(current).slideUp(500);
	});
});


$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});



$(function(){
  let count = 0;
  setInterval(function() {
    if ( count == 0 ) $( '.main' ).removeClass( 'main3' );
    $( '.main' ).removeClass( 'main'+count );
    count++;
    $( '.main' ).addClass( 'main'+count );
    if ( count==3 ) count = 0;
  }, 10000);
});