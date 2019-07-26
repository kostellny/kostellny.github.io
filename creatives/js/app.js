$(function() {

    /* Fixed header */  
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    });


    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffSet = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffSet - 80
        }, 700);
    });


       /* NAv Toggle */
       let nav = $("#nav");
       let navToggle = $("#navToggle");
   
       navToggle.on("click", function (event) {
           event.preventDefault();
   
           nav.toggleClass("show");
   
       });

});