$(function(){
    $(document).ready(function(){

        
        // ! news section
        $('.news_sec .news_slide > .box01').click(function(){
            $('.news_sec .news_slide > .box .blind').toggleClass('show');
            $('.news_sec .news_slide .arrow_box img').toggleClass('down');
        })

        $('.news_tab_list > li').click(function(){
            $('.news_tab_list  > li').removeClass('active');
            $(this).addClass('active');
        }).filter(':eq(0)').click();

        $('.shopping_tab_list > li').click(function(){
            $('.shopping_tab_list > li').removeClass('active');
            $(this).addClass('active');
        }).filter(':eq(0)').click();

        $('.subscribe_tab_list > li').click(function(){
            $('.subscribe_tab_list > li').removeClass('active');
            $(this).addClass('active');
        }).filter(':eq(0)').click();


        // ! subscribe section > sub tab menu
        $('.subscribe_sec .sub_tab_list li').click(function(){
            $('.subscribe_sec .sub_tab_list li').removeClass('active');
            $(this).addClass('active');
        }).filter(':eq(0)').click();


        // ! stock_market section
        $('.stock_market_info > .img_box').click(function(){
            $('.stock_market_info > .blind').toggleClass('show');
        })

        $('.stock_market_info > .blind img').click(function(){
            $('.stock_market_info > .blind').removeClass('show');
        })


        // ! scroll top
        $('.scroll_top_btn').click(function(){
            $(window).scrollTop(0);
        })

        // ! search bar fixed
        $(window).scroll(function(){
            let contents_offset = $('.wrap').offset().top;

            if($(window).scrollTop() === 0){
                $('.search_bar').removeClass('show');
            }else if($(window).scrollTop() >= contents_offset){
                $('.search_bar').addClass('show');
            }
        })
    })
})