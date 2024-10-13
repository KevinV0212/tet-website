import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

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

const swiper = new Swiper('.swiper', {
    effect: 'fade',
    fadeEffect: {
        crossFade: 'true',
    },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });