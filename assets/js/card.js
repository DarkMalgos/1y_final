$(document).ready(function () {
    var old = $('#card-menu li:first-child');

    $('#resto').hover(function () {
        $('#menu-prin').css('height', '100px');
        $('#resto ul').css('display', 'block');
        console.log('toto');
        $('#resto ul li:first-child').hover(function () {
            $('#resto ul li:first-child a').css({
                'border-bottom': 'solid #40C9C5 2px',
                width: '100%'
            });
        }, function () {
            $('#resto ul a').css('border-bottom', 'none');
        });
        $('#resto ul li:last-child').hover(function () {
            $('#resto ul li:last-child a').css({
                'border-bottom': 'solid #40C9C5 2px',
                width: '100%'
            });
        }, function () {
            $('#resto ul a').css('border-bottom', 'none');
        });
    }, function () {
        $('#resto ul').fadeOut('low');
        $('#menu-prin').css('height', 'auto');
    });

    $('#actu').hover(function () {
        $('#menu-prin').css('height', '100px');
        $('#actu ul').fadeIn('low');
        $('#actu ul li:first-child').hover(function () {
            $('#actu').css('position', 'relative');
            $('#actu ul').css({
                position: 'absolute',
                width: '100%'
            });
            $('#actu ul li:first-child a').css({
                'border-bottom': 'solid #40C9C5 2px',
                width: '100%'
            });
        }, function () {
            $('#actu ul a').css('border-bottom', 'none');
        });
        $('#actu ul li:last-child').hover(function () {
            $('#actu').css('position', 'relative');
            $('#actu ul').css({
                position: 'absolute',
                width: '100%'
            });
            $('#actu ul li:last-child a').css({
                'border-bottom': 'solid #40C9C5 2px',
                width: '100%'
            });
        }, function () {
            $('#actu ul a').css('border-bottom', 'none');
        });
    }, function () {
        $('#actu ul').fadeOut('low');
        $('#menu-prin').css('height', 'auto');
    });

    if ($(window).width() > 768) {
        window.onscroll = function () {
            if ($('body').scrollTop() > 600) {
                $('#menu-prin').css({
                    position: 'fixed',
                    background: 'rgba(0, 0, 0, 0.5)',
                    transition: 'all ease 1s'
                });
                $('nav#menu-prin>div~div>ul li a').css('color', 'white');
                $('i').css('color', 'white');
                $('#cont-menu').css('position', 'static');
            } else {
                $('#menu-prin').css({
                    position: 'relative',
                    background: 'transparent',
                    transition: 'all ease 1s'
                });
                $('nav#menu-prin>div~div>ul li a').css('color', 'black');
                $('i').css('color', 'black');
                $('#cont-menu').css('position', 'absolute');
            }
        }
    }

    $('#burger').click(function () {
        this.classList.toggle('active');
        if (this.className == 'active') {
            $('body').css('overflow', 'hidden');
            $('#menu-prin').css({
                height: '100%',
                background: 'rgba(0, 0, 0, 0.8)'
            });
            $('#cont-menu').css({
                display: 'block',
                'margin-top': '80px'
            });
            $('#resto ul').css({
                position: 'static'
            });
            $('#actu ul').css({
                position: 'static'
            });
            $('nav#menu-prin>div~div>ul li a').css('color', 'white');
        } else {
            $('body').css('overflow', 'visible');
            $('#menu-prin').css({
                height: '0',
                background: 'transparent'
            });
            $('#cont-menu').css({
                display: 'none',
                'margin-top': '80px'
            });
            $('nav#menu-prin>div~div>ul li a').css('color', 'black');
        }
    });

    $('#card-menu li').click(function () {
        old.find('p').css('color', '#95989A');
        $('#' + old.attr('data')).fadeOut('low');
        $(this).find('p').css('color', 'black');
        $('#' + $(this).attr('data')).fadeIn('low');
        old = $(this);
    })
});
