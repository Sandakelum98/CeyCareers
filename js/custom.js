(function ($) {
    "use strict";
    $(document).ready(function () {

        $('.mobile-menu-toggle').on('click', function () {
            $('.student-sidebar').addClass('show-sidebar');
            $('body').toggleClass('menu-has-opened');
        });

        // header slide menu
        $('.slide_menu_open').on('click', function () {
            $('.slide-menu-hide').animate({
                'right': '0px'
            });
        });
        $('.slide_menu_close').on('click', function () {
            $('.slide-menu-hide').animate({
                'right': '-540px'
            });
        });

        $('.schedule-tabs .schedule-tab').on('click', function () {
            $('.time-table').hide();
            var dataId = $(this).data('id');
            $('#' + dataId).slideDown();
            $('.schedule-tabs .schedule-tab').removeClass('active');
            $(this).addClass('active');
        });

        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            navText: '',
            controls: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });

        //slider with pager
        $('.primary-slider').bxSlider({
            auto: true,
            autoControls: false,
            stopAutoOnClick: true,
            pager: true,
            nextText: '',
            prevText: ''
        });

        $('.search-btn').on('click', function () {
            $('.search-form').slideDown();
        });


    });
})(jQuery);