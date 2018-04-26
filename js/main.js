'use strict'

// Hamburger Menu
$(document).ready(function(){
    $('.hamburger').click(function(event){
        $('#navigation').slideToggle();
        $('.hamburger').toggleClass('is-active');
        $('#navigation').toggleClass('hide');
    });
});

// Arc Text - Temperos
$(document).ready(function(){
    $('.temperos-header > h3').arctext({radius: 150});
});

// Google Maps - Lojas
function initMap() {
    var uluru = { lat: -18.923056, lng: -48.279836 };
    var map = new google.maps.Map(document.getElementById('map1'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    var uluru = { lat: -18.933300, lng: -48.287994 };
    var map = new google.maps.Map(document.getElementById('map2'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
