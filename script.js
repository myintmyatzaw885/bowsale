$(document).ready(function() {
    $(window).on('load scroll', function() {
        if ($(window).scrollTop() > 5) {
            $("#navbar").css('position', 'fixed');
        } else {
            $("#navbar").css('position', 'relative');
        }
    });
    $('#navbar .account-cart>.fa-user').click(function() {
        $('#navbar .account-cart .dropdown-box').toggle();
    });
    $('#navbar .account-cart .fa-bars').click(function() {
        $('#navbar .lower-navbar').css('top', '0');
    });
    $('#navbar .lower-navbar .fa-times').click(function() {
        $('#navbar .lower-navbar').css('top', '-100%');
    });
    if (window.outerWidth <= 700) {
        $('#navbar .lower-navbar ul li a').click(function() {
            $('#navbar .lower-navbar').css('top', '-100%');
        });
    };
    if (window.outerWidth <= 720) {
        $('#sale .sale-container .sale-first-side .bow-type h3 .fa-angle-down').click(function() {
            $(this).toggleClass('fa-angle-up');
            $('#sale .sale-container .sale-first-side .bowType-dropdown-box').toggle();
        });
        $('#sale .sale-container .sale-first-side .color h3 .fa-angle-down').click(function() {
            $(this).toggleClass('fa-angle-up');
            $('#sale .sale-container .sale-first-side .color-dropdown-box').toggle();
        });
        $('#sale .sale-container .sale-first-side .price h3 .fa-angle-down').click(function() {
            $(this).toggleClass('fa-angle-up');
            $('#sale .sale-container .sale-first-side .price-dropdown-box').toggle();
        });
    };
    $('.home-container').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
    });
    $('.video-container').owlCarousel({
        margin: 10,
        nav: true,
        items: 4,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            388: {
                items: 2,
            },
            1130: {
                items: 3,
                nav: false
            },
            1300: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
    $('.fa-chevron-up').fadeOut();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $('.fa-chevron-up').fadeIn();
        } else {
            $('.fa-chevron-up').fadeOut();
        };
    });
    $(".fa-chevron-up").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 200);
    });
});