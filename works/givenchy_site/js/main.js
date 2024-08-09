
// ! header 고정
$(window).scroll(function(){
    
    let header_offset = $('header').offset().top;
    
    if($(window).scrollTop() === 0){
        $('header').removeClass('fix');
    }else if($(window).scrollTop() >= header_offset){
        $('header').addClass('fix');
    }
})


// ! side menu
$('.side_nav_sec').hide();

$('.menu_btn').click(function(){
    $('.side_nav_sec').fadeIn(400);
    $('body').addClass('stop_scroll');
})

$('.side_nav_sec .close_btn').click(function(){
    $('.side_nav_sec').fadeOut(400);
    $('body').removeClass('stop_scroll');
    $('.sub_category').slideUp();
})

$('.category_box').click(function(){
    $('.sub_category').slideUp();
    $('.category_box > div').removeClass('flip_vertical');
    $('body').toggleClass('stop_scroll');
    if($(this).siblings().hasClass('active')){
        $(this).siblings().removeClass('active');
        $(this).children('div').removeClass('flip_vertical');
    } else {
        $(this).siblings().slideDown(500);    
        $(this).siblings().addClass('active');
        $(this).children('div').addClass('flip_vertical');
    }
})


// ! gift pop up
$('.popup_sec').hide();

$('.marquee > .voyou').click(function(){
    $('.voyou_popup').fadeIn(400);
})
$('.marquee > .shark_lock').click(function(){
    $('.shark_lock_popup').fadeIn(400);
})
$('.marquee > .sunglasses').click(function(){
    $('.sunglasses_popup').fadeIn(400);
})
$('.marquee > .bags').click(function(){
    $('.bags_popup').fadeIn(400);
})
$('.marquee > .jewelry').click(function(){
    $('.jewelry_popup').fadeIn(400);
})

$('.popup_sec .close_btn').click(function(){
    $('.popup_sec').fadeOut(400);
})

$(document).mouseup(function(e){
    var popUp = $('.popup_sec > .container')
    if(popUp.has(e.target).length === 0 ){
        $('.popup_sec').fadeOut(400); 
        $('body').removeClass('stop_scroll');
    }
})


// ! footer dropdown menu
$('.footer_menu_category').click(function(){
    $('.category_box > div').removeClass('flip_vertical');
    if($(this).siblings('ul').hasClass('active')){
        $(this).siblings('ul').removeClass('active');
        $(this).children('div').removeClass('flip_vertical');    
    } else{
        $(this).siblings('ul').addClass('active');
        $(this).children('div').addClass('flip_vertical');
    }
})
