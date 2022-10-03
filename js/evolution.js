$(document).ready(function () {
    $(document).keydown(function (e) {
        if (e.keyCode == 40) {
            $("html, body").animate({

                scrollTop: $('#' + dataslide4N + '').offset().top
            }, 1500, 'easeInOutQuint');
            $('section[id="' + dataslide1C + '"] .button').addClass('flash');
            return false;
            event.preventDefault();
        }

        if (e.keyCode == 38) {
            $("html, body").animate({

                scrollTop: $('#' + dataslide2P + '').offset().top
            }, 1500, 'easeInOutQuint');
            return false;
            event.preventDefault();
        }

        if (e.keyCode == 32) {
            $(".button0").click()
        }
    });

    slide1 = $('.slide');
    slide1.waypoint(function (event, direction) {
        dataslide0 = $(this).attr('data-slide');
        dataslide1C = 'slide' + dataslide0;
        dataslide2P = 'slide' + (dataslide0 - 1);
        dataslide3 = parseInt(dataslide0) + 1;
        dataslide4N = 'slide' + dataslide3;
        yearhashtag = $('section[id="' + dataslide1C + '"] audio').attr('id')
        if (direction === 'down') {
            $('section[id="' + dataslide1C + '"] audio').addClass('active');
            $('section[id="' + dataslide2P + '"] audio').trigger("pause").removeClass('active').animate({
                volume: 1
            }, 1000);
            $('section[id="' + dataslide4N + '"] audio').trigger("pause").removeClass('active').animate({
                volume: 1
            }, 1000);
            $('section[id="' + dataslide1C + '"] audio.active').trigger("play");
            $('section[id="' + dataslide1C + '"] audio.active').animate({
                volume: 1
            }, 1000);
            $('section[id="' + dataslide1C + '"] div.year').fadeIn(2000);
            $('section[id="' + dataslide2P + '"] a.button').fadeOut(1000);
            parent.location.hash = yearhashtag;


        } else {
            $('section[id="' + dataslide1C + '"] audio').trigger("pause").removeClass('active').animate({
                volume: 1
            }, 1000);
            $('section[id="' + dataslide2P + '"] audio').addClass('active');
            $('section[id="' + dataslide2P + '"] audio.active').trigger("play");
            $('section[id="' + dataslide2P + '"] audio.active').animate({
                volume: 1
            }, 1000);
            $('section[id="' + dataslide1C + '"] div.year').fadeOut(1000);
            $('section[id="' + dataslide2P + '"] a.button').fadeIn(1000);
            parent.location.hash = yearhashtag;


        }


        $('audio:not(.active)').animate({
            volume: 0
        }, 0, function () {
            $('audio:not(.active)').get(0).pause();
        })


        $("#1920s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide2").offset().top
            }, 1500, 'easeInOutQuint');
            $("#start").removeClass('active')
        });
        $("#1930s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide3").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#1940s").bind("ended", function () {

            $("html,body").animate({
                scrollTop: $("#slide4").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#1950s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide5").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#1960s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide6").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#1970s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide7").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#1980s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide8").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#1990s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide9").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#2000s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide10").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#2010s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide11").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#2020s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide12").offset().top
            }, 1500, 'easeInOutQuint');
        });

        if ($('#mute').hasClass('muted')) {
            $('audio.active').trigger("pause");
            $('audio').animate({
                volume: 0
            }, 0);
        };
    }, {
        offset: '50%'
    });
});