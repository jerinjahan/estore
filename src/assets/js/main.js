$(function() {
    "use strict";
    skrollr.init({
        forceHeight: false
    });
    $('select').niceSelect();
    $(".hero-carousel").owlCarousel({
        items: 3,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 5000,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            810: {
                items: 3
            }
        }
    });
    if ($('.owl-carousel').length > 0) {
        $('#bestSellerCarousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                900: {
                    items: 3
                },
                1130: {
                    items: 4
                }
            }
        })
    }
    $(".s_Product_carousel").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        loop: true,
        nav: false,
        dots: false
    });

    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();
    $(window).scroll(function() {
        var sticky = $('.header_area'),
            scroll = $(window).scrollTop();
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    if(document.getElementById("price-range")) {
        var nonLinearSlider = document.getElementById('price-range');
        noUiSlider.create(nonLinearSlider, {
            connect: true,
            behaviour: 'tap',
            start: [500, 4000],
            range: {
                'min': [0],
                '10%': [500, 500],
                '50%': [4000, 1000],
                'max': [10000]
            }
        });
        var nodes = [document.getElementById('lower-value'), document.getElementById('upper-value')];
        nonLinearSlider.noUiSlider.on('update', function(values, handle, unencoded, isTap, positions) {
            nodes[handle].innerHTML = values[handle];
        });
    }
});