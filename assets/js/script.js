$('document').ready(function(){
	$('.header-carousel').owlCarousel({
	rtl:true,
	loop:true,
    items:1,
    responsiveClass:true,
    autoplay:true,
	autoplayTimeout:5000,
    nav: true,
	navText:['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>','<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
	autoplayHoverPause: true,
	animateOut: 'slideOutRight',
	animateIn: 'slideInLeft'
});



	$('.slide-up').owlCarousel({
	loop: true,
	autoplay: true,
	items: 1,
	nav: true,
	navText:['&#x27;next&#x27;','load more<br><i class="fa fa-angle-down" aria-hidden="true" style="color: #00b300; font-size:3em;"></i>'],
	autoplayHoverPause: true,
	animateOut: 'slideOutUp',
	animateIn: 'slideInUp'
});
});