// drop phones
$('.header-top__drop-click').on('click', function () {
    $(this).toggleClass('active');
    $('.header-top__drop-main').toggleClass('active');
});

// drop main menu
$('.header-main__cat').on('click', function () {
    $(this).toggleClass('active');
    $('.header-main__drop').toggleClass('active');
    $('.mob-menu').toggleClass('active');
    if (window.screen.width < 576) {
        $('.header-nav').toggleClass('active');
        if ($('.header-nav').hasClass('active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }

});
$('.mob-menu__left a').on({
    mouseenter: function () {
        $('.mob-menu__right-block').removeClass('active');
        $(this).closest('.mob-menu').find('.mob-menu__right-block').eq($(this).index()).addClass('active');
    },
    mouseleave: function () {
    }
});
$('.header-main__cart').on('click', function (e) {
    e.preventDefault();
    $('.drop-cart').toggleClass('active');
});


// main slider
$('.home-main__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: true,
                adaptiveHeight: true
            }

        }
    ]
});
$('.home-main__progress').each(function () {
    $(this).find('span').css('width', 34 * $(this).closest('.home-main__nav').find('.home-main__curr').html() / $(this).closest('.home-main__nav').find('.home-main__slides').html());
});
$('.home-main__next').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.home-main__slider').slick('next');
});
$('.home-main__prev').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.home-main__slider').slick('prev');
});

// home features tabs
$('.home-features__tabs').on('click', 'button:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.home-features').find('.home-features__cont-block').removeClass('active').eq($(this).index()).addClass('active');
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
$('.card__next').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.card__img').slick('next');
});
$('.card__prev').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.card__img').slick('prev');
});

// home products tabs
$('.home-products__tabs').on('click', 'button:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.home-products').find('.home-products__cont-block').removeClass('active').eq($(this).index()).addClass('active');
    $(this).closest('.home-products').find('.home-products__cont-block').eq($(this).index()).find('.card').each(function () {
        $(this).find('.card__img').slick('reinit');
    });
});


//  card btns
$('.card__wish').on('click', function () {
    $(this).toggleClass('active');
});
$('.card__buy').on('click', function () {
    $(this).addClass('active');
});

// home reviews scroll
var window_width = $(window).width();
$(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    var lineOffset = $(".home-reviews").offset().top;
    console.log(scroll_position);
    console.log(lineOffset);
    var object_position_left = -500 - (scroll_position - lineOffset);
    var object_position_left2 = (-500 - (scroll_position - lineOffset)) * 1.2;
    $(".home-reviews__line1").css({ left: object_position_left2 });
    $(".home-reviews__line2").css({ left: object_position_left });
});

//  home-videos slider
$('.home-videos__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: '.home-videos__next',
    prevArrow: '.home-videos__prev',
    slide: '.home-videos__block',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                infinite: true
            }

        }
    ]
});

//  home-blog slider
$('.home-blog__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    nextArrow: '.home-blog__next',
    prevArrow: '.home-blog__prev',
    slide: '.home-blog__block',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                infinite: true
            }

        }
    ]
});

//  home-faq accordeon
$('.home-faq__title').on('click', function () {
    $(this).toggleClass('active');
    $(this).closest('.home-faq__block').find('.home-faq__cont').toggleClass('active');
});
