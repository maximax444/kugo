// drop phones
$('.header-top__drop-click').on('click', function () {
    $(this).toggleClass('active');
    $('.header-top__drop-main').toggleClass('active');
});

// drop main menu
$('.header-main__cat').on('click', function () {
    $(this).toggleClass('active');
    $('.header-main__drop').toggleClass('active');
});

// home features tabs
$('.home-features__tabs').on('click', 'button:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.home-features').find('.home-features__cont-block').removeClass('active').eq($(this).index()).addClass('active');
});

// home products tabs
$('.home-products__tabs').on('click', 'button:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.home-products').find('.home-products__cont-block').removeClass('active').eq($(this).index()).addClass('active');
});

// home products sliders
$('.card').each(function () {
    $(this).find('.card__img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        slide: '.card__img-wrap'
    });
});