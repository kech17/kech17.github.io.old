function validateForm()
{
	var firstNameField = document.forms["contactForm"]["firstName"].value;
	var lastNameField = document.forms["contactForm"]["lastName"].value;
	var messageField = document.forms["contactForm"]["message"].value;
	var emailField = document.forms["contactForm"]["_replyto"].value;

	var arrayField = [firstNameField, lastNameField, messageField];
	for (var i = 0; i < arrayField.length; i++)
	{
		if (arrayField[i] == null || arrayField[i] == "")
		{
			missingFieldAlert();
			return false;
		}
	}

    var atpos = emailField.indexOf("@");
    var dotpos = emailField.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=emailField.length) {
        badEmailAlert();
        return false;
    }
}

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
		}, 2500);
}

/*******************************/
/******  SWEET ALERTS  *********/
/*******************************/

function comingSoonAlert()
{
	swal({
			title: 'Coming Soon!',
			text: 'I am still creating this page!',
			type: 'info',
			confirm: 'OK'
		});
}

function missingFieldAlert()
{
	swal({
		title: 'Missing Contact Fields!',
		text: 'You need to fill in all fields before submission',
		type: 'error',
		Confirm: 'OK'
	})
}

function badEmailAlert()
{
	swal({
		title: 'Bad Email Format!',
		text: 'You must submit a valid email',
		type: 'error',
		Confirm: 'OK'
	})
}

function formSubmitSuccess()
{
	swal({
		title: 'Submission Success!',
		text: 'I will respond to your email as soon as possible!',
		type: 'success',
		Confirm: 'Done'
	})
}

/*******************************/
/******  MAIN PROGRAM  *********/
/*******************************/


$(document).ready(function() {
	var chartHidden = true;
	$('.project-nav').click(function() {
		comingSoonAlert();
	});
	$('.cv-nav').click(function() {
		comingSoonAlert();
	});
	$('#contact-button').click(function() {
		autoScroll(this,'.fourth-row');
	});
	$('#contactForm').submit(function() {

		var dataObj = {};
		dataObj.firstName = $('#firstName').val();
		dataObj.lastName = $('#lastName').val();
		dataObj.email = $('#email').val();
		dataObj.message = $('#message').val();

		$.ajax({
		    url: "http://forms.brace.io/kevinchang@live.ca", 
		    method: "POST",
		    data: JSON.stringify(dataObj),
		    dataType: "json",
		    success: function(data)
		    {
		    	formSubmitSuccess();
		    }
		});
	})
	
	$(window).scroll(function() {
		setupNavigation();
		if (chartHidden && isScrolledIntoView('#hardwareChart'))
		{
			var myChart = new Chart(hardwareChart).Bar(hardwareData, {
				responsive:true,
				scaleOverride:true,
				scaleSteps: 10,
				scaleStepWidth: 10,
				scaleStartValue: 0,
				scaleLabel: "<%=value%>"+"%"
			});
			chartHidden = false;
		}
		$('.fade-in-right').each(function() {
			if (isScrolledIntoView(this)) {
				$(this).addClass('slideLeftCalm');
			}
		});
		$('.fade-in-left').each(function() {
			if (isScrolledIntoView(this)) {
				$(this).addClass('slideRightCalm');
			}
		});
	});
});







/*
		$(document).ready(function() {
			$(window).scroll(function() {
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				$('.fade-in').each(function(i) {
					var bottom_of_object = $(this).offset().top + $(this).outerHeight();
					if (bottom_of_window > bottom_of_object - $(this).outerHeight() / 2) {
						$(this).stop().animate({
							opacity : 1,
							marginLeft : '+=' + fadeFromLeft
						}, 500);
						$(this).removeClass('fade-in');
						$(this).addClass('fade-in-shown');
					}
				});
				var offset = $('.first-row').offset().top - 45;
				if ($(window).scrollTop() > offset) {
					$('.main-menu').stop().animate({
						backgroundColor : '#37353a',
						boxShadow : '0 2px 6px rgba(0, 0, 0, 0.2)',
						top : '0px'
					}, 500);
				}
				if ($(window).scrollTop() < 150) {
					$('.main-menu').stop().animate({
						backgroundColor : 'transparent'
					}, 500);
				}
			});
			$("#contact-button").click(function() {
				$('html, body').animate({
					scrollTop : $(".third-row").offset().top - 65
				}, 2500);
			});
			$("#send-button").click(function() {
				$('html, body').animate({
					scrollTop : 0
				}, 2500);
			});
		});
		*/