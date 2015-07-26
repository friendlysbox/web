// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    startClock();
});

function loadImage() {
    $('.intro-img').animate(
        { opacity: 1 },
        3000,
        function() {
            $('#Stage_jbeeb_3').animate(
                { opacity: 1 },
                1000
            );
        }
    );
}

function startClock(){
    var myCountdown4 = new Countdown({
                                        year: 2016,
                                        month: 3,
                                        day: 24,
                                        width: 400,
                                        height: 50,
                                        target   : "clock",
                                        rangeHi : 'month',
                                        padding : 1.0,
                                        hideLine : 1,
                                        numbers		: 	{
                                                        font 	: 'Lora,"Helvetica Neue",Helvetica,Arial,sans-serif',
                                                        color	: "#FFFFFF",
                                                        bkgd	: "#1E2747",
                                                        fontSize : 200,
                                                        rounded	: 0.15,				// percentage of size
                                                        shadow	: {
                                                                    x : 0,			// x offset (in pixels)
                                                                    y : 3,			// y offset (in pixels)
                                                                    s : 4,			// spread
                                                                    c : "#1E2747",	// color
                                                                    a : 0.4			// alpha	// <- no comma on last item!
                                                                    }
                                                        },

                                        labels : {
                                                    textScale : 1,
                                                    offset : 5,
                                                    color	: "#FFFFFF",
                                                    font : 'Lora,"Helvetica Neue",Helvetica,Arial,sans-serif'
                                                } // <- no comma on last item!

                                        });
}

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 12,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(-33.879063, 18.871633), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: false,
        scrollwheel: false,
        draggable: true,
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(-33.879063, 18.871633);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });

    var contentString =
        '<div class="googleMapInfo">'+
        '<p style="font-family: Lora,\'Helvetica Neue\',Helvetica,Arial,sans-serif;"><a href="http://www.knorhoek.co.za/" target="_blank">Knorhoek Wine Estate</a></p>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
    });

    infowindow.open(map,beachMarker)

}

function submitForm() {
    var formArray = $('#RSVPform').serializeArray(),
        ajaxData = {
            'name': '',
            'coming': false,
            'notes': ''
        };

    formArray.forEach(function(element){
        switch(element.name) {
            case 'name1':
                ajaxData.name = ajaxData.name + element.value + ' ';
                break;
            case 'name2':
                ajaxData.name = ajaxData.name + element.value + ' ';
                break;
            case 'rsvp':
                if(element.value === 'yes') {
                    ajaxData.coming = true;
                } else if(element.value === 'no') {
                    ajaxData.coming = false;
                }
                break;
            case 'guestno':
                ajaxData.notes = ajaxData.notes + 'guestno: ' + element.value + ' | ';
                break;
            case 'Other':
                ajaxData.notes = ajaxData.notes + 'Other: ' + element.value;
                break;
        }
    });

    $.post(
        '/guests',
        ajaxData,
        function( data ) {
            alert('Thank you for letting us know!');
            $('#RSVPform')[0].reset();
        },
        'json'
    );
}
