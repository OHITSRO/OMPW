$(document).ready(function () {
    // On Window Resize
    var screen_change_events = "resize webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange";

    windowResized();

    $(window).on(screen_change_events, function () {
        windowResized();
    });

    if ($('html').hasClass('ummc'))
        $('html').removeClass('ummc');
});

function windowResized() {
    if ($(window).width() < 825){
        $('html').addClass('nav-overflow');
    }
    else {
        $('html').removeClass('nav-overflow');
    }
};