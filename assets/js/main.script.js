/* ======================== NAVBAR SHOW AND HIDE ======================== */

$(document).scroll(function () {
    if (window.scrollY > 120) {
        $("section#navbar").addClass("fixed-top");
    } else {
        $("section#navbar").removeClass("fixed-top");
    }
});

/* ======================== NAVBAR SHOW AND HIDE ======================== */
