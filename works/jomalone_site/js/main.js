$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger); // 스크롤 트리거와 타임라인을 사용하기 위해서 필요함 

    // ! wsss tit txt
    gsap.from(".sec_tit h2", {
        scrollTrigger: {
            trigger: ".sec_tit h2", // 타겟의 위치 
            start: "0% 100%", // 스크롤의 기준좀과 타겟의 이벤트실행 기준점 위치를 설정 
        },
        y: 200,
        duration: 1,
    })

    gsap.from(".sec_tit h3", {
        scrollTrigger: {
            trigger: ".sec_tit h3",
            start: "0% 100%",
        },
        y: 200,
        duration: 1,
    })

    // ! main cologne img
    var cologneImg = gsap
        .timeline({
            scrollTrigger: {
                trigger: ".purchase_container .img_box img",
                start: "0% 100%",
                end: "middle center",
                scrub: true
            }
        })
        .from(".purchase_container .img_box img", {
            scale: 0.5,
            duration: 1,
        });

    // ! wsss banner txt 
    gsap.from(".wsss_bnr p", {
        scrollTrigger: {
            trigger: ".wsss_bnr p",
            start: "0% 100%",
        },
        y: 200,
        duration: 1,
    })


    // ! wsss fragrance note
    var fragranceNote01 = gsap
        .timeline({
            scrollTrigger: {
                trigger: ".top_note_container h2",
                start: "0% 80%",
                end: "+=150",
                scrub: 3,
            }
        })
    fragranceNote01.fromTo(".top_note_container h2", {
        y: 150,
        opacity: 0,
        duration: 1,
    }, {
        y: -30,
        opacity: 1,
        duration: 1,
    });
    fragranceNote01.fromTo(".top_note_container .illust_img_box", {
        opacity: 0,
        y: 30,
    }, {
        opacity: 1,
        y: -30,
        duration: 1,
    })

    var fragranceNote02 = gsap
        .timeline({
            scrollTrigger: {
                trigger: ".heart_note_container h2",
                start: "0% 80%",
                end: "+=150",
                scrub: 3,
            }
        })
    fragranceNote02.fromTo(".heart_note_container h2", {
        y: 150,
        opacity: 0,
        duration: 1,
    }, {
        y: -30,
        opacity: 1,
        duration: 1,
    });
    fragranceNote02.fromTo(".heart_note_container .illust_img_box", {
        opacity: 0,
        y: 30,
    }, {
        opacity: 1,
        y: -30,
        duration: 1,
    })

    var fragranceNote03 = gsap
        .timeline({
            scrollTrigger: {
                trigger: ".base_note_container h2",
                start: "0% 80%",
                end: "+=150",
                scrub: 3,
            }
        })
    fragranceNote03.fromTo(".base_note_container h2", {
        y: 150,
        opacity: 0,
        duration: 1,
    }, {
        y: -30,
        opacity: 1,
        duration: 1,
    });
    fragranceNote03.fromTo(".base_note_container .illust_img_box", {
        opacity: 0,
        y: 30,
    }, {
        opacity: 1,
        y: -30,
    })

    // ! item list tab menu
    $(function () {
        $('.tab_contents > div').hide(); //일단 탭 컨텐츠 전체를 숨김
        $('.tab_btn_list a').click(function () { //a태그를 클릭하면 이벤트가 일어남
            $('.tab_contents > div').hide().filter(this.hash).fadeIn();
            //선택한 요소 중 해당요소가 있으면 페이드 인으로 나타나라

            $('.tab_btn_list a').removeClass('active');
            $(this).addClass('active');
            return false; //이벤트가 끝났다는 것을 알려줌 (혹시 모를 에러를 방지하기 위해)
        }).filter(':eq(0)').click(); //이미 클릭되어진 상태를 만들기 위해 사용
    })
})

// ! footer
 $('.m_footer .f_menu_list > li > ul').slideUp();
 $('.m_footer .f_menu_list > li > div').click(function(){
    $('.m_footer .f_menu_list > li').removeClass('active');
    $('.m_footer .f_menu_list > li > ul').slideUp();
    if($(this).hasClass('active')){
        $(this).siblings().removeClass('active');
        $(this).removeClass('active');
    } else {
        $(this).siblings().slideDown(300);    
        $(this).siblings().addClass('active');
        $(this).addClass('active');
    }
});


// ! scroll top btn
$('.top_btn').click(function(){
    $('html, body').animate({scrollTop : 0}, 400);
});
 
    