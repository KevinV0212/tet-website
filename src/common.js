// Toggle menu
$(function(){
    $('.nav-btn').click(function(){
    $(".nav-btn").toggleClass('btn_open');
    $(".header").slideToggle(500);
    $("nav").toggleClass('open');
    });

});

// Close menu when nav item is selected
$(function(){
    $(".nav-item").click(function(){
        $(".header").slideToggle(500);
    })
})


