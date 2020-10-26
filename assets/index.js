$("#menu-btn").click(function () {
    $(".toggle-menu").slideToggle();
    console.log(hiddenMenu);
});

// let hiddenMenu = $(".toggle-menu").css("visibility");

// if (hiddenMenu == visible) {
//     $("#menu-btn").removeClass("fa-bars");
//     $("#menu-btn").addClass("fa-times");
// }

$("a").click(function () {
    $(".toggle-menu").hide();
});

let screenWidth = $(document).width();

if (screenWidth < 500) {
    $("#about-me-span").hide();
    $(".divider").hide();
}