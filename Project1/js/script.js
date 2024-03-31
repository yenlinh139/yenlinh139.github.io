// JavaScript Document

$('#btn-menu').click(function(){
	$('#menu').toggle('slide')
})

$('#menu-left').click(function(){
	$('#menu-product').toggle('slide')
})

$('#menu-close').click(function(){
	$('#menu-product').toggle('slide')
})


$(document).ready(function(){
	$(".regular-home").slick({
        dots: true,
        infinite: true,
		speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
		 responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
		  ]
      });
	$(".regular-blog").slick({
        dots: true,
        infinite: true,
		speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
		 responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
		  ]
      });
	$(".regular-shop").slick({
        dots: true,
        infinite: true,
		speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
		 responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
		  ]
      });
	$(".regular-shop-small").slick({
        dots: true,
        infinite: true,
		speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
		 responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
		  ]
      });
    $(".center").slick({
        dots: true,
		infinite: true,
        centerMode: true,
		speed: 300,
        slidesToShow: 6,
        slidesToScroll: 3,
		 responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 800,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 4
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
      });
	
	$(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
});
$('.zoom_01').ezPlus({
    zoomType: 'inner',
    cursor: 'crosshair'
});
