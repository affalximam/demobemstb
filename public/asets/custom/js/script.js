$(function () {
    let navMain = $('.navbar-collapse')
    navMain.on('click', '.nav-item:not([data-toggle])', null, function () {
        navMain.collapse('hide')
    })
})

$(document).ready(function () {
    
    $('.navbar-toggler, .nav-link').click(function () {
        $('.navbar-toggler').toggleClass('open');
    })

});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(".jumbotron").height() / 4) {
            $(".navbar").addClass("navbar-transform");
        } else {
            $(".navbar").removeClass("navbar-transform");
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < $(".jumbotron-home").height() / 8) {
            $(".backtotop").removeClass("backtotop-in")
        } if ($(this).scrollTop() < 120) {
            $(".backtotop").removeClass("backtotop-in")
        } else {
            $(".backtotop").addClass("backtotop-in")
        }
    });
});


(function() {
    $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'EaseInOut',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });
})();

(function() {
    gsap.registerPlugin(TextPlugin);
    gsap.from(".jumbotron h1", {
        duration: 2,
        text: "",
        delay: 1,
    });

    gsap.from(".jumbotron h2", {
        duration: 1,
        text: "",
        delay: 2.5,
    });
    gsap.from(".jumbotron h1::after", {
        duration: 1,
        opacity: 0,
        delay: 2.5,
    });
    gsap.from(".jumbotron h3", {
        duration: 1,
        text: "",
        delay: 3.5,
    });
    gsap.from(".jumbotron-tentang h1::after", {
        duration: 1,
        opacity: 0,
        delay: 2.5,
    });
})();

(function() {
    let sambutanPresma1h2 = document.querySelectorAll(".sambutan-presma h2");
        sambutanPresma1h2.forEach((h2, i) => {
        h2.dataset.aos = "fade-in";
        h2.dataset.aosAnchorPlacement = "center-bottom";
    });
    let sambutanPresma2img = document.querySelectorAll(".sambutan-presma-2 img");
        sambutanPresma2img.forEach((img, i) => {
        img.dataset.aos = "fade-in";
        img.dataset.aosAnchorPlacement = "top-bottom";
        img.dataset.aosDelay = 500;
    });
    let sambutanPresma2h3 = document.querySelectorAll(".sambutan-presma-2 h3");
        sambutanPresma2h3.forEach((h3, i) => {
        h3.dataset.aos = "fade-in";
        h3.dataset.aosAnchorPlacement = "top-bottom";
        h3.dataset.aosDelay = 500;
    });
    let sambutanPresma2p = document.querySelectorAll(".sambutan-presma-2 p");
        sambutanPresma2p.forEach((p, i) => {
        p.dataset.aos = "fade-in";
        p.dataset.aosAnchorPlacement = "top-bottom";
        p.dataset.aosDelay = 500;
    });
    let sambutanPresma2a = document.querySelectorAll(".sambutan-presma-2 a");
        sambutanPresma2a.forEach((a, i) => {
        a.dataset.aos = "fade-in";
        a.dataset.aosAnchorPlacement = "top-bottom";
        a.dataset.aosDelay = 500;
    });

    let dokumentasiTerbaruh2 = document.querySelectorAll(".dokumentasi-terbaru h2");
        dokumentasiTerbaruh2.forEach((h2, i) => {
        h2.dataset.aos = "fade-in";
        h2.dataset.aosAnchorPlacement = "center-bottom";
    });
    let dokumentasiTerbaruCard = document.querySelectorAll(".dokumentasi-terbaru .card");
        dokumentasiTerbaruCard.forEach((card, i) => {
        card.dataset.aos = "fade-in";
        card.dataset.aosAnchorPlacement = "top-bottom";
        card.dataset.aosDelay = 500;
    });

    let tentang3h1 = document.querySelectorAll(".tentang-3 h1");
        tentang3h1.forEach((h1, i) => {
        h1.dataset.aos = "fade-in";
        h1.dataset.aosAnchorPlacement = "center-bottom";
        h1.dataset.aosDelay = 500;
    });
    let tentang3pre = document.querySelectorAll(".tentang-3 pre");
        tentang3pre.forEach((pre, i) => {
        pre.dataset.aos = "fade-in";
        pre.dataset.aosAnchorPlacement = "top-bottom";
        pre.dataset.aosDelay = 500;
    });

    AOS.init({
        once: false,
        duration: 500,
        easing: 'easeOut',
    });
})();

(function () {
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() < $(".jumbotron").height() / 3) {
          $(".jumbotron h1, .jumbotron h2, .jumbotron h3").css({
            opacity: "1",
            transition: "1s",
            transform: "translateY(0px)",
          });
        } else {
          $(".jumbotron h1, .jumbotron h2, .jumbotron h3").css({
            opacity: "0",
            transition: "1s",
            transform: "translateY(-50px)",
          });
        }
      });
    });
})();