$(document).ready(function () {
    current = $('main>section>header>div>ul>li:first-child');
    $('main>section>header>div>ul>li').click(function () {
        current.find('p').css('color', '#95989A');
        $('#' + current.attr('data')).css('display', 'none');
        $(this).find('p').css('color', 'black');
        $('#' + $(this).attr('data')).css('display', 'block');
        current = $(this);
    });
});
