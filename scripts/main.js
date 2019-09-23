$("#home-button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#landing").offset().top
    }, 1000);
});

$(".bio-button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#bio").offset().top
    }, 1000);
});

$(".projects-button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});