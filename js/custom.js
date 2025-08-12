/******  Banner SLider  ******/
$(document).ready(function(e) {
    if ($(".banner-slider .slide-item").length > 1) {
        $(".banner-slider").owlCarousel({
            loop: true,
            dots: true,
            items: 1,
            //autoplay: true,
            autoplayTimeout: 7500,
            smartSpeed: 1500,
            nav: false,
        });
    } else {
        $(".banner-slider").removeClass("owl-carousel");
    }
    /******************** Product Slider *****************/
    $(".gallery_slider").owlCarousel({
        items: 3,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        autoWidth: true,
        margin: 20,
        navText: ['<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26px" height="49px" viewBox="0 0 26 49"><path fill-rule="evenodd" clip-rule="evenodd"  d="M24.037,48.747L0,24.5l1.97-1.987l24.037,24.247L24.037,48.747z"/><path fill-rule="evenodd" clip-rule="evenodd"  d="M0,24.5L24.037,0.252l1.97,1.988L1.97,26.487L0,24.5z"/></svg>', '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26px" height="49px" viewBox="0 0 26 49"><path fill-rule="evenodd" clip-rule="evenodd"  d="M1.963,0.252L26,24.5l-1.97,1.987L-0.007,2.24L1.963,0.252z"/><path fill-rule="evenodd" clip-rule="evenodd"  d="M26,24.5L1.963,48.747l-1.97-1.987L24.03,22.512L26,24.5z"/></svg>'],
        responsive: {
            0: {
                items: 1,
                loop: $(".gallery_slider .item").length > 2 ? true : false,
                autoWidth: false,
                margin: 20,
            },
            575: {
                items: 2,
                loop: $(".gallery_slider .item").length > 2 ? true : false,
                autoWidth: false,
                margin: 20,
            },
            991: {
                items: 3,
                loop: $(".gallery_slider .item").length > 2 ? true : false,
                autoWidth: false,
                margin: 20,
            },
            1199: {
                items: 3,
                loop: $(".gallery_slider .item").length > 2 ? true : false,
                autoWidth: true,
                margin: 30,
            },
        }

    });
    /* ---------------------------------------------- /*
    * Mouse Follower
    /* ---------------------------------------------- */
    jQuery(window).on('load', function() {
        jQuery(".gallery_slider .owl-stage-outer").append('<span id="follower"></span>');
        var mouseX = 0,
            mouseY = 0,
            limitX = 150 - 15,
            limitY = 150 - 15;
        $('.gallery_slider .owl-stage-outer').mousemove(function(e) {
            var offset = $('.gallery-slider-main').offset();
            var offset_top = $('.gallery-slider-main').offset().top;
            mouseX = Math.min(e.pageX - offset.left, limitX);
            mouseY = Math.min(e.pageY - offset.top, limitY);
            if (mouseX < 0) mouseX = 0;
            if (mouseY < 0) mouseY = 0;
            mouseX = e.pageX;
            mouseY = e.pageY - offset_top;
        });
        // cache the selector
        var follower = $("#follower");
        var xp = 0,
            yp = 0;
        var loop = setInterval(function() {
            // change 12 to alter damping higher is slower
            xp += (mouseX - xp);
            yp += (mouseY - yp);
            follower.css({
                left: xp - 120,
                top: yp - 55
            });
        }, 0);
    }); 
});
/******************************************/


/************* my Account ************/
$(document).ready(function() {
    $('.myaccount_div').click(function() {
        $('.myaccount-open').slideToggle('fast');
    });
    $(window).on('click touchend', function(e) {

        if (!$(e.target).hasClass("myaccount_div") && !$(e.target).hasClass("popup_title") && $(e.target).parents(".myaccount-open").length === 0) {
            $(".myaccount-open").css('display', 'none');
        }

    });
});
/******************************************/

/********* Navvigation ***********/
$(".menu ul").each(function() {
    var me = $(this);
    var myparent = me.parent("li");
    me.prepend("<li><button class='menu-back'>Back</button></li>");
    myparent.append("<span class='toggle-submenu'></span>");
    myparent.addClass("has-sub");
    me.addClass("sub-menu");
});
$(".navigation-open").click(function() {
    $("body").addClass("menu-action");
    $(".sub-menu").removeClass("show");
});
$(".navigation-close").click(function() {
    $("body").removeClass("menu-action");
    $(".sub-menu").removeClass("show");
});
$(".toggle-submenu").click(function() {
    var me = $(this);
    me.prev("ul").addClass("show");
});
$(".menu-back").click(function() {
    var me = $(this);
    me.parents().eq(1).removeClass("show");
});
$(".has-sub").click(function() {
    var me = $(this);
    me.addClass("hovered");
});
$(".user-link").click(function() {
    $(".user-menu").toggle();
});
$(window).on('click touchend', function(e) {
    if (!$(e.target).hasClass("navigation-open") && !$(e.target).hasClass("navigation-close") && !$(e.target).hasClass("navigation") && $(e.target).parents(".navigation").length === 0) {
        $("body").removeClass("menu-action");
        $(".sub-menu").removeClass("show");
    }
    if (!$(e.target).hasClass("hovered") && $(e.target).parents(".hovered").length === 0) {
        $(".has-sub").removeClass("hovered");
    }
    if (!$(e.target).hasClass("user-link") && !$(e.target).hasClass("user-menu") && $(e.target).parents(".user-menu").length === 0 && $(e.target).parents(".user-link").length === 0) {
        $(".user-menu").hide();
    }
});
/**********************************************/

/******************** Sidebar Cart *****************/
jQuery(".cart-sticky-form-scroll").mCustomScrollbar();
$(window).on('load', function() {
    jQuery('.cart_sidebar_main').addClass('cart_sidebar_main_main');
    var get_width = $(window).width();
    var get_window = $(window).height();
    var get_height = get_window;
    $(".cart_sidebar_main_main").css("min-height", get_height + 'px');
})
jQuery(document).delegate(".carticonmain", "click", function() {
    jQuery(".cart_sidebar_main").toggleClass("in");
    jQuery(".carticonmain").toggleClass("in");
    jQuery("body").toggleClass("overly-get-quote");
});
jQuery('.close-form').on('click', function(e) {
    if (jQuery(e.target).closest().length == 0) {
        jQuery(".cart_sidebar_main").removeClass('in');
        jQuery(".carticonmain").removeClass("in");
        jQuery("body").removeClass("overly-get-quote");
    }
});
jQuery(window).on('click touchend', function(e) {
    if (!jQuery(e.target).hasClass("carticonmain") && !jQuery(e.target).hasClass("oneclass") && !jQuery(e.target).hasClass("input") && !jQuery(e.target).hasClass("form_row") && jQuery(e.target).parents(".cart_sidebar_main").length === 0) {
        jQuery(".cart_sidebar_main").removeClass('in');
        jQuery(".carticonmain").removeClass("in");
        jQuery("body").removeClass("overly-get-quote");
    }
});

/******************** Sticky Header *****************/
$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
});
/**********************************************/

/******************** Search Popup *****************/
$(".search-close").click(function(e) {
    $("body").removeClass("search-popup-open");
    //setTimeout(function(){
    $(".search-popup").fadeOut();
    //},500);
});
$(".search-button").click(function(e) {
    $("body").addClass("search-popup-open");
    //setTimeout(function(){
    $(".search-popup").fadeIn();
    $(".search-input").focus();
    //},500);
});
/**********************************************/

/******************** input-quantity *****************/
$(document).delegate(".input-quantity", "change", function() {
    var me = $(this);
    var value = parseInt(me.val());
    if (value < 1) {
        me.val(1).change();
    }
});
$(document).delegate(".quantity-plus", "click", function() {
    var me = $(this);
    var value = parseInt(me.prev(".input-quantity").val());
    me.prev(".input-quantity").val(value + 1).change();
});
$(document).delegate(".quantity-minus", "click", function() {
    var me = $(this);
    var value = parseInt(me.next(".input-quantity").val());
    if (value > 1) {
        me.next(".input-quantity").val(value - 1).change();
    }
});
/**********************************************/

/******************** Product Fancybox *****************/
$('[data-fancybox="gallery"]').fancybox({
    loop: false,
    infobar: false,
    buttons: [
        'fullScreen',
        'thumbs',
        'share',
        'close'
    ],
    transitionEffect: "slide",
    transitionDuration: 700
});
/**********************************************/

/******************** product-image-slider *****************/
$('.product-image-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    spaceBetween: 30,
    //arrows: false,
    infinite: false,
    asNavFor: $('.product-image-slider .slide-item').length > 5 ? '.product-thumbnails-slider' : null,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev-icon.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next-icon.png"></button>',
});
$('.product-thumbnails-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    horizontal: true,
    asNavFor: '.product-image-slider',
    dots: false,
    focusOnSelect: true,
    draggable: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev-icon.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next-icon.png"></button>',
});
/*****************************************************/

/*****************  move-top ************************/
$(".move-top button").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
/*****************************************************/