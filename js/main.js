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
        .closest('.container').find('.home-features__cont-block').removeClass('active').eq($(this).index()).addClass('active');
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
console.log($(".home-reviews").length != 0);
// home reviews scroll
if ($(".home-reviews").length != 0) {
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
}


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



// service work
$('.service-work__tabs').on('click', 'button:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.service-work').find('.service-work__cont-block').removeClass('active').eq($(this).index()).addClass('active');
});
// service team
$('.service-team__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    nextArrow: '.home-blog__next',
    prevArrow: '.home-blog__prev',
    slide: '.service-team__block',
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

// cooperation serts
$('.cooperation-serts__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    nextArrow: '.cooperation-serts__slider .next',
    prevArrow: '.cooperation-serts__slider .prev',
    slide: 'img',
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

// filter range 
$(".inp1").on("change", function () {
    let sliderOne = $(this).closest(".catalog-filter__ranges").find(".inp1").val();
    let sliderTwo = $(this).closest(".catalog-filter__ranges").find(".inp2").val();
    let sliderMaxValue = $(this).closest(".catalog-filter__ranges").find(".slider-1").attr('max');
    let sliderTrack = $(this).closest(".catalog-filter__ranges").find(".slider-track");
    percent1 = (sliderOne / sliderMaxValue) * 100;
    percent2 = (sliderTwo / sliderMaxValue) * 100;
    sliderTrack.css('background', `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`);
    $(this).closest(".catalog-filter__ranges").find(".slider-1").val($(this).val());
});
$(".inp2").on("change", function () {
    let sliderOne = $(this).closest(".catalog-filter__ranges").find(".inp1").val();
    let sliderTwo = $(this).closest(".catalog-filter__ranges").find(".inp2").val();
    let sliderMaxValue = $(this).closest(".catalog-filter__ranges").find(".slider-1").attr('max');
    let sliderTrack = $(this).closest(".catalog-filter__ranges").find(".slider-track");
    percent1 = (sliderOne / sliderMaxValue) * 100;
    percent2 = (sliderTwo / sliderMaxValue) * 100;
    sliderTrack.css('background', `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`);
    $(this).closest(".catalog-filter__ranges").find(".slider-2").val($(this).val());
});
$(".slider-1").on("input", function () {
    let sliderOne = $(this).val();
    let sliderTwo = $(this).closest(".catalog-filter__ranges-wrap").find(".slider-2").val();
    let sliderMaxValue = $(this).attr('max');
    let sliderTrack = $(this).closest(".catalog-filter__ranges-wrap").find(".slider-track");
    if ((parseInt(sliderTwo) - parseInt(sliderOne)) <= 0) {
        $(this).val(parseInt(sliderTwo));
        $(this).closest(".catalog-filter__ranges").find(".catalog-filter__ranges-inputs .inp1").val(sliderTwo);
    } else {
        $(this).closest(".catalog-filter__ranges").find(".catalog-filter__ranges-inputs .inp1").val(sliderOne);
    }
    percent1 = (sliderOne / sliderMaxValue) * 100;
    percent2 = (sliderTwo / sliderMaxValue) * 100;
    sliderTrack.css('background', `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`);
});
$(".slider-2").on("input", function () {
    let sliderOne = $(this).closest(".catalog-filter__ranges-wrap").find(".slider-1").val();
    let sliderTwo = $(this).val();
    let sliderMaxValue = $(this).attr('max');
    let sliderTrack = $(this).closest(".catalog-filter__ranges-wrap").find(".slider-track");
    if ((parseInt(sliderTwo) - parseInt(sliderOne)) <= 0) {
        $(this).val(parseInt(sliderOne));
        $(this).closest(".catalog-filter__ranges").find(".catalog-filter__ranges-inputs .inp2").val(sliderOne);
    } else {
        $(this).closest(".catalog-filter__ranges").find(".catalog-filter__ranges-inputs .inp2").val(sliderTwo);
    }

    percent1 = (sliderOne / sliderMaxValue) * 100;
    percent2 = (sliderTwo / sliderMaxValue) * 100;
    sliderTrack.css('background', `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`);
});

//filter hidden blocks
$('.catalog-filter__more').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.catalog-filter__block').slice(4, 15).hide();
        $(this).find('span').html('Показать весь фильтр');
    } else {
        $(this).addClass('active');
        $('.catalog-filter__block').slice(4, 15).show();
        $(this).find('span').html('Скрыть');
    }
});

//filter show/hide (mobile)
$('.catalog__top-open').on('click', function () {
    $('.catalog__aside').addClass('active');
});
$('.catalog__aside-close').on('click', function () {
    $('.catalog__aside').removeClass('active');
});

// about process tabs
$('.about-process__tabs').on('click', 'button:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.about-process').find('.about-process__cont-block').removeClass('active').eq($(this).index()).addClass('active');
});

//  product list slider
$('.product-list__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: false,
    slide: '.card',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }

        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                infinite: true
            }

        }
    ]
});
$('.product-list__prev').on('click', function () {
    $(this).closest('.product-list__slider').slick('prev');
});
$('.product-list__next').on('click', function () {
    $(this).closest('.product-list__slider').slick('next');
});

// product gallery
$('.product__gallery-block').on('click', function () {
    $('.product__gallery-block').removeClass('active');
    $('.product__img img').attr('src', $(this).find('img').attr('src'));
    $(this).addClass('active');
});

// product info
$('.product-info__tabs').on('click', 'button:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.product-info').find('.product-info__cont-block').removeClass('active').eq($(this).index()).addClass('active');
});

// product options
$('.product-options label').on('click', function () {
    $(this).closest('.product-options__block').addClass('active');
    $(this).closest('.product-options__block').find('.product-options__end-title').html($(this).find('.product-options__cont').find('.product-options__name span').html());
    $(this).closest('.product-options__block').find('.product-options__end-subtitle').html($(this).find('.product-options__cont').find('.product-options__drop-cont span').html());
    $(this).closest('.product-options__block').find('.product-options__end-price').html($(this).find('.product-options__cont').find('.product-options__price').html());
});
$('.product-options__end-change').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.product-options__block').removeClass('active');
});

// article slider
$('.article__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: false,
    adaptiveHeight: true,
    slide: '.article__block',
    prevArrow: '.prev',
    nextArrow: '.next'
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