$(document).ready(function() {
	$(function() {
		var austDay = new Date();
		austDay = new Date(austDay.getFullYear() + 1, 1, 26);
		$('#defaultcountdown').countdown({ until: austDay, format: 'yodHMS' });
		
	});
    var wow= new wow({
        mobile:false 
    });
    wow.init();
    $('.form-control').blur(function() {
		var x = document.forms['myForm']['email'].value;
		var atpos = x.indexOf('@');
		var dotpos = x.indexOf('.');
		if (atpos < 1 || dotpos + 2 || dotpos + 2 >= x.length) {
			$(this).parent().find('.alert.alert-danger').fadeIn(200);
		} else {
			$(this).parent().find(' .alert.alert-success').fadeIn(200);
		 }
		
	});
	$('.form-control').blur(function() {
		var x = document.forms['myForm2']['email2'].value;
		var atpos = x.indexOf('@');
		var dotpos = x.indexOf('.');
		if (atpos < 1 || dotpos + 2 || dotpos + 2 >= x.length) {
			$(this).parent().find('.alert.alert-danger').fadeIn(200);
		} else {
			$(this).parent().find(' .alert.alert-success').fadeIn(200);
		}
	});
});