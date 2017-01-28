$(document).ready(function () {
    //slider func
    (function() {
        var container = $('.slider'),
        counter = 1;

        $('.slider__controls-top').on('click', function(e) {
            e.preventDefault();

            var $this = $(this),
            allSlides = $('.slider__item'),
            activeSlide = $('.slider__item.active');

            if (counter >= allSlides.length) {
                counter = 0;
            }

            var nextSlide = allSlides.eq(counter);

            activeSlide.animate({
                'top' : '100%' //делаем эффект ухода
            },300);

            nextSlide.animate({
                'top' : '0%'
            },300,function() {
                activeSlide.removeClass('active').css('top', '-100%'); //тайно возвращаем на место вверх
                $(this).addClass('active');
            });

            counter++;
        });
    })();
    //second slider func
    (function(){

        $('.slideshow__link').on('click', function(e){
            e.preventDefault();
            
            var $this = $(this),
                path = $this.attr('href'),
                container = $this.closest('.slideshow'),
                display = container.find('.slideshow__display-pic'),
                preloader = $('#preloader');

            display.fadeOut(500, function () {
                preloader.show();
            });

            display.attr('src', path).on('load', function () {
                $(this).fadeIn();
                preloader.hide();
            });
        });
    })();
});