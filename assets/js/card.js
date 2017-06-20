$(document).ready(function () {
    current = $('main>section>header>div>ul>li:first-child');
    $('main>section>header>div>ul>li').click(function () {
        current.find('p').css('color', '#95989A');
        $('#' + current.attr('data')).css('display', 'none');
        $(this).find('p').css('color', 'black');
        $('#' + $(this).attr('data')).css('display', 'block');
        current = $(this);
    });

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
        }
    });
});
