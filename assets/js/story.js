$(document).ready(function () {
    if ($(window).width() > 768) {
        $('#resto').hover(function () {
            $('#menu-prin').css('height', '100px');
            $('#resto ul').fadeIn('low');
            console.log('toto');
            $('#resto ul').hover(function () {
                $('#resto ul').fadeIn('low');
            }, function () {
                $('#resto ul').fadeOut('low');
            });
            $('#resto ul li:first-child').hover(function () {
                $('#resto ul').css('display', 'block');
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
            $('#actu ul').hover(function () {
                $('#actu ul').fadeIn('low');
            }, function () {
                $('#actu ul').fadeOut('low');
            });
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

        window.onscroll = function () {
            console.log($('body').scrollTop());
            if ($('body').scrollTop() > 100) {
                $('body header:first-child').removeClass('center-col');
                $('#menu-prin').removeClass('center-col');
                $('#menu-prin').css({
                    width: '100%'
                });
            }
            if ($('body').scrollTop() > 600) {
                $('#menu-prin').css({
                    position: 'fixed',
                    background: 'rgba(0, 0, 0, 0.5)',
                    'z-index': '5000',
                    transition: 'all ease 1s'
                });
                $('nav#menu-prin>div~div>ul li a').css('color', 'white');
                $('i').css('color', 'white');
                $('#cont-menu').css('position', 'static');
            } else {
                $('body header:first-child').addClass('center-col');
                $('#menu-prin').addClass('center-col');
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
});
