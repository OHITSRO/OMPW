function initSlider() {
    // Initialize main slideshow - Slick Slider
    if ($('.feature-slider:not(.body-copy)').length > 0 && $(".slider-item").length > 0) {

        $('.feature-slider:not(.body-copy)').each(function (index, element) {
            $(element).slick({
                slide: '.slider-item',
                rows: 0,
                arrows: true,
                dots: true,
                infinite: true,
                speed: 400,
                fade: true,
                lazyLoad: 'progressive',
                autoplay: true,
                autoplaySpeed: 5000,
                appendArrows: $(element).find('.slider-nav'),
                appendDots: $(element).find('.slider-nav')
            });

            if ($(window).width() >= 640) {

                $(element).find(".slick-slide:not(.slick-current) .caption").animate({
                    left: "3%",
                    opacity: 0
                }, 0, function () {
                    // Animation complete.
                });

                // On before slide change
                $(element).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    $(this).find(".slick-current .caption").animate({
                        left: "3%",
                        opacity: 0
                    }, 80, function () {
                        // Animation complete.
                    });
                });

                // On after slide change
                $(element).on('afterChange', function (event, slick, currentSlide) {
                    $(this).find(".slick-current .caption").animate({
                        left: "0%",
                        opacity: 1
                    }, 100, function () {
                        // Animation complete.
                    });
                });
            }

            $(element).find(".slick-arrow").on('click', function () {
                $(element).slick('slickPause');
            });
            $(element).find('.slick-dots').on('click', function () {
                $(element).slick('slickPause');
            });

            //$(element).find('.slick-dots button').each(function (i) {
            //    var text = $(this).html();
            //    if (text != "" && text != undefined)
            //        $(this).attr('aria-label', 'Click to show Slide ' + text);
            //});
        });

        $('.slick-track').attr('aria-label', 'Image Slideshow');
    }

    if ($('.feature-slider.body-copy').length > 0 && $(".slider-item").length > 0) {

        var asNavForVal = null;

        if ($('.thumb-slider').length) {
            asNavForVal = ".thumb-slider";
        }

        $('.feature-slider.body-copy').each(function (index, element) {
            $(element).slick({
                slide: '.slider-item',
                rows: 0,
                arrows: true,
                dots: true,
                infinite: true,
                speed: 400,
                fade: true,
                lazyLoad: 'progressive',
                autoplay: true,
                autoplaySpeed: 5000,
                asNavFor: asNavForVal,
                appendArrows: $(element).find('.slider-nav'),
                appendDots: $(element).find('.slider-nav')
            });

            if ($(window).width() >= 640) {

                $(element).find(".slick-slide:not(.slick-current) .caption").animate({
                    left: "3%",
                    opacity: 0
                }, 0, function () {
                    // Animation complete.
                });

                // On before slide change
                $(element).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    $(this).find(".slick-current .caption").animate({
                        left: "3%",
                        opacity: 0
                    }, 80, function () {
                        // Animation complete.
                    });
                });

                // On after slide change
                $(element).on('afterChange', function (event, slick, currentSlide) {
                    $(this).find(".slick-current .caption").animate({
                        left: "0%",
                        opacity: 1
                    }, 100, function () {
                        // Animation complete.
                    });
                });
            }

            $(element).find(".slick-arrow").on('click', function () {
                $(element).slick('slickPause');
            });
            $(element).find('.slick-dots').on('click', function () {
                $(element).slick('slickPause');
            });

            //$(element).find('.slick-dots button').each(function (i) {
            //    var text = $(this).html();
            //    if (text != "" && text != undefined)
            //        $(this).attr('aria-label', 'Click to show Slide ' + text);
            //});
        });

        if ($('.thumb-slider').length) {
            $('.thumb-slider').each(function (index, element) {
                $(element).slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    asNavFor: '.feature-slider.body-copy',
                    centerMode: true,
                    focusOnSelect: true
                });
            });
        }
        
        $('.slick-track').attr('aria-label', 'Image Slideshow');
    }

    timer = window.setTimeout(function () { // Add a small delay to ease burden on computer
        if ($(window).width() >= 640) {
            $('#sub-nav-vertical-wrap').stick_in_parent({
                offset_top: 110
            });
        }
    }, 80);
}

$(document).ready(function () {
    initSlider();
});

$(document).on("AjaxComplete", function () {
    initSlider();
});