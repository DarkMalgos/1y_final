$(document).ready(function () {
    var i = 1,
        acc_back = setInterval(function () {
            console.log(i);
            $('#acceuil').css('background', "url('/img/acceuil" + i + ".jpg') no-repeat center");
            $('#acceuil').css('background-size', "cover");
            if (i != 2) ++i;
            else i = 0;
        }, 3500);

    window.onscroll = function () {
        if ($('body').scrollTop() > 600) {
            $('nav>div~ul').css('display', 'none');
            $('#burger').fadeIn('low');
        } else {
            $('nav>div~ul').css('display', 'flex');
            $('#burger').fadeOut('low');
            $('#burger').removeClass('active');
            $('#cont-menu').removeClass('cont-burger');
        }
    }

    $('#resto').hover(function () {
        $('#resto ul').fadeIn('low');
        $('#resto ul li:first-child').hover(function () {
            $('#resto ul li:first-child a').css('border-bottom', 'solid #40C9C5 2px');
        }, function () {
            $('#resto ul a').css('border-bottom', 'none');
        });
        $('#resto ul li:last-child').hover(function () {
            $('#resto ul li:last-child a').css('border-bottom', 'solid #40C9C5 2px');
        }, function () {
            $('#resto ul a').css('border-bottom', 'none');
        });
    }, function () {
        $('#resto ul').fadeOut('low');
        $('#resto ul').removeClass('ON');
    });

    $('#actu').hover(function () {
        $('#actu ul').fadeIn('low');
        $('#actu ul').addClass('ON');
        $('#actu ul li:first-child').hover(function () {
            $('#actu ul li:first-child a').css('border-bottom', 'solid #40C9C5 2px');
        }, function () {
            $('#actu ul a').css('border-bottom', 'none');
        });
        $('#actu ul li:last-child').hover(function () {
            $('#actu ul li:last-child a').css('border-bottom', 'solid #40C9C5 2px');
        }, function () {
            $('#actu ul a').css('border-bottom', 'none');
        });
    }, function () {
        $('#actu ul').fadeOut('low');
        $('#actu ul').removeClass('ON');
    });
    $('#burger').click(function () {
        this.classList.toggle('active');
        if (this.className == 'active') {
            $('#cont-menu').addClass('cont-burger');
            $('nav>div~ul').css('display', 'flex');
        } else {
            $('#cont-menu').removeClass('cont-burger');
            $('nav>div~ul').css('display', 'none');
            //alert('hidde menu');
        }
    });
});
