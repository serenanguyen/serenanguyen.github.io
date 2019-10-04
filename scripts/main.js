$("#home-button").click(function() {
    // $([document.documentElement, document.body]).animate({
    //     scrollTop: $("#landing").offset().top
    // }, 1000);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });
});