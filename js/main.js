$(document).ready(function(){
    $(document).scroll(function () {
        var $nav = $(".top-bar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
	$('.mobile-menu').click( function(e) {
        $(this).toggleClass("close");
        $('.header-nav').slideToggle();
    });
	$('.header-nav a').click(function(){
        $($(this).attr('href')).animatescroll();
	});
    $('.header-slider').slick({
        dots: true,
        autoplay: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.review-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.review-slider-nav'
    });
    $('.review-slider-nav').slick({
        asNavFor: '.review-slider',
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
    $('input, textarea').focus(function(){
        $(this).data('placeholder', $(this).attr('placeholder'));
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });
    $(function(){
        var video = $('#intro-video')[0];
        $('.playBtn').on('click', function() {
            $( this ).toggleClass('closeVideo');
            if (video.paused) {
                $(this).closest('.video-offset').addClass('active');
                video.play();
            } else {
                $(this).closest('.video-offset').removeClass('active');
                video.pause();
            }
            return false;
        });
    });
    $(function () {
        if ($( window ).width() < 768 ) {
            $(".gallery-grid div").slice(0, 8).show();
            var elements = 4;
        } else {
            $(".gallery-grid div").slice(0, 12).show();
            var elements = 6;
        }
        $("#loadWorks").on('click', function (e) {
            e.preventDefault();
            $(".gallery-grid div:hidden").slice(0, elements).slideDown();
            if ($(".gallery-grid div:hidden").length == 0) {
                $("#loadWorks").fadeOut('slow');
            }
        });
    });
    $('.gallery-grid div').each(function() {
        $(this).find('a').magnificPopup({
            type: 'image',
            image: {
                titleSrc: function(item) {
                    console.log(item.el);
                    return item.el.find('img').attr('title');
                }
            },
            gallery: {
                enabled:true
            }
        });
    })
});
