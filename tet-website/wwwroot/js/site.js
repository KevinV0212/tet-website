import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
// Toggle menu
$(function () {
    $('.nav-btn').click(function () {
        $(".nav-btn").toggleClass('btn_open');
        $(".header").slideToggle(500);
        $("nav").toggleClass('open');
    });

});

// Close menu when nav item is selected
$(function () {
    $(".nav-item").click(function () {
        $(".header").slideToggle(500);
    })
})


const populateEvents = async (day) => {
    let res = await fetch(`./schedules/${day}.json`);
    let data = await res.json();
    let events = data.events;
    $('#event_list').empty();
    events.forEach(event => {
        let start = new Date(event.start);
        let end = new Date(event.end);
        let currentTime = new Date();

        let eventElement = document.createElement("li");
        eventElement.classList.add("event")
        if (currentTime >= start && currentTime < end) {
            eventElement.classList.add("current-event");
        }
        else {
            eventElement.classList.remove("current-event");
        }

        let eventName = document.createElement("h3");
        eventName.classList.add("event_name");
        eventName.textContent = event.name;

        let eventTime = document.createElement("p");
        eventTime.classList.add("event_time");
        eventTime.textContent = `${getFormattedTime(new Date(start))}-${getFormattedTime(new Date(end))}`

        eventElement.appendChild(eventName);
        eventElement.appendChild(eventTime);


        $('#event_list').append(eventElement)
    })
}

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

// funcion that takes a date object and extracts and formats the time
// gets time formatted HH-MM-(AM/PM)

$(document).ready(() => populateEvents("saturday"));

const getFormattedTime = (date) => {
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let suffix = hour <= 12 ? "AM" : "PM";
    hour = (hour <= 12 ? hour : hour - 12);
    // let formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${hour}:${formattedMinutes} ${suffix}`

}




$('#sat_btn').on('click', () => {
    $('#sun_btn').removeClass("active");
    $('#sat_btn').addClass("active")
    populateEvents("saturday")
})
$('#sun_btn').on('click', () => {
    $('#sat_btn').removeClass("active");
    $('#sun_btn').addClass("active")
    populateEvents("sunday")
})

// const updateSchedule = () => {
//   populateEvents("saturday")
//   setTimeout(updateSchedule, 5000)
// }
// updateSchedule();