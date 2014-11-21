function isScrolledIntoView(elem)
{
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemHeight = $(elem).height();
	var elemBottom = elemTop + elemHeight;

    //return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    return (docViewBottom >= (elemTop+elemHeight/2));
}

function fadeFromLeft(elem)
{
	var offset = 100;
	$(elem).stop().animate({
		opacity: 1,
		marginLeft : '+=' + offset
	}, 500);
	$(elem).removeClass('fade-in-left');
	$(elem).addClass('fade-in-shown');
}
function fadeFromRight(elem)
{
	var offset = 100;
	$(elem).stop().animate({
		opacity: 1,
		marginRight : '+=' + offset
	}, 500);
	$(elem).removeClass('fade-in-right');
}

function setupNavigation()
{
	var offset = $('.first-row').offset().top - 45;
	if ($(window).scrollTop() > offset) {
		$('.main-menu').addClass('main-menu-dark');
	}
	if ($(window).scrollTop() < 150) {
		$('.main-menu').removeClass('main-menu-dark');
	}
}

function autoScroll(fromElem, toElem)
{
	$('html, body').animate({
		scrollTop : $(toElem).offset().top 
	}, 1500);
}

function comingSoonAlert()
{
	swal({
		title: 'Coming Soon!',
		text: 'I am still creating this page!',
		type: 'info',
		confirm: 'OK'
	});
}
