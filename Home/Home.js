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

	$('#contactForm').trigger('submit');
	return true;
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
	$('#contactForm').submit(function(event) {
		event.preventDefault();
		var formData = $(this).serialize();
		console.log(formData);
		$.ajax({
			url: "http://forms.brace.io/kevinchang@live.ca", 
			method: "POST",
			data: formData,
			dataType: "json"
		}).done(function() {
			formSubmitSuccess();
		}).fail(function() {
			formSubmitFail();
		});
	});
	$(window).scroll(function() {
		setupNavigation();
		if (chartHidden && isScrolledIntoView('#hardwareChart'))
		{
			var myChart = new Chart(hardwareChart).Bar(hardwareData, {
				responsive:true,
				scaleOverride:true,
				scaleSteps: 10,
				scaleStepWidth: 1,
				scaleStartValue: 0,
				scaleLabel: "<%=value%>"
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

/*******************************/
/******  SWEET ALERTS  *********/
/*******************************/

function missingFieldAlert()
{
	swal({
		title: 'Missing Contact Fields!',
		text: 'You need to fill in all fields before submission',
		type: 'error',
		Confirm: 'OK'
	});
}

function badEmailAlert()
{
	swal({
		title: 'Bad Email Format!',
		text: 'You must submit a valid email',
		type: 'error',
		Confirm: 'OK'
	});
}

function formSubmitSuccess()
{
	swal({
		title: 'Submission Success!',
		text: 'I will respond to your email as soon as possible!',
		type: 'success',
		Confirm: 'Done'
	});
}

function formSubmitFail()
{
	swal({
		title: 'Submission Failed!',
		text: 'There was a problem in submitting your message. Please try again later.',
		type: 'error',
		Confirm: 'Done'
	});
}