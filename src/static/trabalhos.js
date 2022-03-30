$(document).ready(function() {
    /*NAVBAR CODIGO*/
    $(window).scroll(function() {
        if (this.scrollY > 10) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    /*Carrossel*/
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPauser: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }


        }
    });
});