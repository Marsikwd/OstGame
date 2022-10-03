jQuery(document).ready(function ($) {
    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    buttonstart = $('.button.start');
    button0 = $('.button0');
    scrolldown = $('.scrolldown');
    mywindow = $(window);
    htmlbody = $('html,body');

    slide.waypoint(function (event, direction) {
        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        } else {
            $('.navigation li[data-slide="' + (dataslide - 1) + '"]').addClass('active').next().removeClass('active');
        }
    });

    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="0"]').addClass('active');
            $('.navigation li[data-slide="1"]').removeClass('active');

        }
        $('.navigation li[data-slide="12"]').css('border-bottom-width', '0')
        $('.navigation li[data-slide="0"]').css('border-bottom-width', '0')
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');

    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
    scrolldown.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
    button0.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
        $('body').removeClass('noscroll');
        $("#start").trigger("play");
        $(".clickon").remove();
        setTimeout(
            function () {
                $("#topbar").fadeIn('fast');
                $(".navigation").fadeIn('fast')
            }, 1500);

        setTimeout(
            function () {
                $("#1920s").get(0).volume = 0;
                $("#1920s").trigger("play");
                $("#1920s").animate({
                    volume: 1
                }, 1000);

                $("#topbar").fadeIn('fast');
                if ($('#mute').hasClass('muted')) {
                    $('audio.active').trigger("mute");
                    $('audio').animate({
                        volume: 0
                    }, 200);
                    $('audio.active').trigger("pause");
                    $('#mute div').css({
                        'background': 'url(images/icons/mute_on.png) center center no-repeat'
                    });
                };
            }, 2000);
    });

    buttonstart.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
        $('body').removeClass('noscroll');
        $("#start").trigger("play");
        $(".clickon").remove();
        setTimeout(
            function () {
                $("#topbar").fadeIn('fast');
                $(".navigation").fadeIn('fast')
            }, 1500);

        setTimeout(
            function () {
                $("#1920s").get(0).volume = 0;
                $("#1920s").trigger("play");
                $("#1920s").animate({
                    volume: 1
                }, 1000);

                $("#topbar").fadeIn('fast');
                if ($('#mute').hasClass('muted')) {
                    $('audio.active').trigger("mute");
                    $('audio').animate({
                        volume: 0
                    }, 200);
                    $('audio.active').trigger("pause");
                    $('#mute div').css({
                        'background': 'url(images/icons/mute_on.png) center center no-repeat'
                    });
                };
            }, 2000);
    });

    $(document).on("click", "#mute", function () {
        $('#mute').addClass('muted');

        if ($('#mute').hasClass('muted')) {
            $('audio.active').trigger("mute");
            $('audio').animate({
                volume: 0
            }, 2);
            $('audio.active').trigger("pause");
            $('#mute div').css({
                'background': 'url(images/icons/mute_on.png) center center no-repeat'
            });
        };
    })

    $(document).on("click", "#mute.muted", function () {
        $('audio.active').trigger("play");
        $('audio.active').animate({
            volume: 1
        }, 200);
        $('#mute').removeClass('muted');
        $('#mute div').css({
            'background': 'url(images/icons/mute_off.png) center center no-repeat'
        });
    });
});










