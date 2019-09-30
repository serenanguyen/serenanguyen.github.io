$("#home-button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#landing").offset().top
    }, 1000);
});