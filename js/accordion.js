$(".faq__accordion h4:first").addClass("active");
$(".faq__accordion p:not(:first)").hide();

$(".faq__accordion h4").click(function () {
    $(this).next("p").slideToggle("slow").siblings("p:visible").slideUp("slow");
    $(this).toggleClass("active");
    $(this).siblings("h4").removeClass("active");
});

