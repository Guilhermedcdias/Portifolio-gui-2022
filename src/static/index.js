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

    var typed = new Typed(".typing", {
        strings: ["Desenvolvedor.", "Designer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});