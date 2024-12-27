
// Slick Slider - Javascript Library - Initialization
// http://kenwheeler.github.io/slick/
function initFeatureSlideshow() {
    // Initialize main slideshow - Slick Slider
    if ($('.feature-slider').length > 0 && $(".slider-item").length > 0) {

        $('.feature-slider').each(function (index, element) {
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
};

// Animate On Scroll - Javascript Library - Initialization
// https://michalsnik.github.io/aos/
function initAnimateOnScroll() {
    AOS.init({
        easing: 'ease-out-back',
        duration: 800,
        delay: 300,
        once: true,
        disable: 'mobile'
    });
};


$(document).ready(function () {
    initFeatureSlideshow();
    initAnimateOnScroll();
});

$(document).on("AjaxComplete", function () {
    initFeatureSlideshow();
    initAnimateOnScroll();
});