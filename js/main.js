$(document).ready(function () {

    $(function () {
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });


    $('body').addClass('stop-scroll');
    setTimeout(function () {
        $('body').removeClass('stop-scroll');
    }, 3300);


    setInterval(function () {
        let now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let amPm = now.getHours() < 12 ? "AM" : "PM";
        $('.current_time').text(hr + ':' + min + ' ' + amPm);
        if (hr < 10) {
            $('.current_time').text('0' + hr + ':' + min);
        }
        if (min < 10) {
            $('.current_time').text(hr + ':' + '0' + min);
        }
    }, 1000);



    let header = gsap.timeline();
    header.from('.header', { y: -150, duration: 1, delay: 2.5 });



    $(window).scroll(function () {
        let mainProjectOffset = $('.main_project_sec').offset().top;
        let subProjectOffset = $('.sub_project_sec > .marquee_container').offset().top;
        let contactOffset = $('footer').offset().top;
        if ( $(window).scrollTop() >= mainProjectOffset ){
            $('.sticky_nav').addClass('show');
            $('.nav_main').addClass('active');
        }else{
            $('.sticky_nav').removeClass('show');
            $('.nav_main').removeClass('active');
        }

        if ( $(window).scrollTop() >= subProjectOffset ){
            $('.nav_main').removeClass('active');
            $('.nav_sub').addClass('active');
            $('.sticky_nav li:not(.nav_sub)').addClass('reversal');
        }else{
            $('.nav_sub').removeClass('active');
            $('.sticky_nav li:not(.nav_sub)').removeClass('reversal');
        }

        if ( $(window).scrollTop() >= contactOffset ){
            $('.nav_main, .nav_sub').removeClass('active');
            $('.sticky_nav li').removeClass('reversal');
            $('.nav_contact').addClass('active');
        }else{
            $('.nav_contact').removeClass('active');
        }
    });

    $('.sticky_nav li a').click(function(){
        $(this).addClass('active');
    });


    $('.sub_project_sec .sub_contents .slide_down').slideUp();
    $('.sub_project_sec .sub_contents .content_tit').click(function(){
        $('.sub_project_sec .sub_contents .slide_down').slideUp();
        $('.sub_project_sec .sub_contents .content_tit .arrow_img_box').removeClass('flip_vertical');
        if($(this).siblings().hasClass('active')){
            $(this).siblings().removeClass('active');
            $(this).children().children('.arrow_img_box').removeClass('flip_vertical');
        } else {
            $(this).siblings().slideDown(500);    
            $(this).siblings().addClass('active');
            $(this).children().children('.arrow_img_box').addClass('flip_vertical');
        }
    });

});