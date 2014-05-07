jQuery(document).ready(function($){

	var localDev = true;
	
	if(localDev == true) {
		loadReload();
	}
	
	// Suggestion Popup Form
	$('.popup-form-btn').click(function(e){
		e.preventDefault();
		$('.popup-form').fadeIn(500);
		//$('.popup-overlay').fadeIn(500);
	});
		$('.close-btn').click(function(e){
			e.preventDefault();
			$('.popup-form').fadeOut(500);
			//$('.popup-overlay').fadeOut(500);
	});
   

	var formHeight = $('.popup-form').height()/2;
	
	$('.popup-form').css('margin-top', '-'+formHeight+'px');
	
	$('.js-faq_question').click(function() {
		if ($(this).hasClass('active_question')) {
			$('.js-faq_answer').slideUp();
			$(this).removeClass('active_question')
		} else {
			$('.js-faq_answer').slideUp();
			$('.js-faq_question').removeClass('active_question')
			$(this).addClass('active_question')
			$(this).parent().find('.js-faq_answer').slideDown();
		}
	});
	
	$('.js-menu_button').click(function() {
		if ($(this).hasClass('nav_open')) {
			$('#headerNavigation').slideUp();
			$(this).removeClass('nav_open');
		} else {
			$('#headerNavigation').slideDown();
			$(this).addClass('nav_open');
		}
	});
	
	$('.js-side_menu_button').click(function() {
		if ($(this).hasClass('nav_open')) {
			$('.side_bar-nav').slideUp();
			$('.js-side_menu_button span').html('+');
			$(this).removeClass('nav_open');
		} else {
			$('.side_bar-nav').slideDown();
			$('.js-side_menu_button span').html('-');
			$(this).addClass('nav_open');
		}
	});
	
	$('.js-quick_links_button').click(function() {
		if ($(this).hasClass('nav_open')) {
			$('.quick_links').slideUp();
			$('.js-quick_links_button span').html('+');
			$(this).removeClass('nav_open');
		} else {
			$('.quick_links').slideDown();
			$('.js-quick_links_button span').html('-');
			$(this).addClass('nav_open');
		}
	});
	
	$('.js-mobile_quick_links_button').click(function() {
		if ($(this).hasClass('nav_open')) {
			$('.mobile_quick_links .quick_links').slideUp();
			$('.js-quick_links_button span').html('+');
			$(this).removeClass('nav_open');
		} else {
			$('.mobile_quick_links .quick_links').slideDown();
			$('.js-quick_links_button span').html('-');
			$(this).addClass('nav_open');
		}
	});
	
	$(window).resize(function() {
		if($(window).width() > 620) {
			$('.quick_links').css('display', 'block');
			$('.mobile_quick_links .quick_links').css('display', 'none');
			$('button').removeClass('nav_open');
		} else {
			$('.quick_links').css('display', 'none');
		}
	});

});

function getLoadTime() {
	var now = new Date().getTime();
	
	// Get the performance object
	window.performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
	var timing = performance.timing || {};
	if (timing) {
		var load_time = now - timing.navigationStart;
		console.log('Load time: ' + load_time + 'ms');
	}
}

window.onload = function() {
	getLoadTime();
}