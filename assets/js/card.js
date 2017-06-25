$(document).ready(function () {
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
});
