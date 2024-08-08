$(document).ready(function () {

    // ! 새로고침 시 페이지 상단으로 이동
    $(function () {
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });


    // ! 인트로 애니메이션 시 스크롤 방지
    $('body').addClass('stop-scroll');
    setTimeout(function () {
        $('body').removeClass('stop-scroll');
        $('.bg').removeClass('active');
    }, 3300);


    // ! 현재 시간 나타내기
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


    // ! 인트로 후 헤더 애니메이션 
    gsap.from('.header', { 
        y: -150, 
        duration: 1, 
        delay: 2.5 
    });

    // ! 모바일 헤더 고정 
    let windowWidth = $(window).width();

    if(windowWidth <= 768){
        $('.header').addClass('fix');
    }else{
        $('.header').removeClass('fix');
    }

    $( window ).resize(function() {

        setInterval(function(){
            if(window.innerWidth <= 768){
                $('.header').addClass('fix');
            }else{
                $('.header').removeClass('fix');
            }
        })
        
     });


    // ! 상단 스크롤 진행 바
    $(window).scroll(function(){
        const documentHeight = $(document).height(); // 문서의 총 높이
        const windowHeight = $(window).height(); // 윈도우 창의 높이
        let headerOffset = $('header').offset().top;

        // 현재 스크롤된 위치를 계산
        const scrollPosition = $(window).scrollTop();

        // 스크롤된 비율을 계산
        const scrolledPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

        // 프로그레스 바의 너비를 스크롤 비율에 따라 조정
        $(".progress_bar").css('width', scrolledPercentage + "%");

        // 프로그래스 바 상단 고정 클래스 추가
        if( $(window).scrollTop() > headerOffset){
            $('.progress_bar_container').addClass('fix');
        }else{
            $('.progress_bar_container').removeClass('fix');
        }
    })


    // ! 스티키 내비게이션
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
        }else{
            $('.nav_sub').removeClass('active');
        }

        if ( $(window).scrollTop() >= contactOffset ){
            $('.nav_main, .nav_sub').removeClass('active');
            $('.nav_contact').addClass('active');
        }else{
            $('.nav_contact').removeClass('active');
        }
    });

    $('.sticky_nav li a').click(function(){
        $(this).addClass('active');
    });


    // ! 메인 프로젝트 이미지 스크롤 시 페이드 인 효과
    $(window).scroll( function(){
			
        $('.main_contents .imgs_container .img_box').each(function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},700);
            }
            
        }); 
    });


    // ! 서브 프로젝트 컨텐츠 슬라이드
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