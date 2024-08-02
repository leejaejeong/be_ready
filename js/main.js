$(document).ready(function(){
    $(function(){
        $("html, body").animate({ scrollTop: 0 }, "fast"); 
    });
    
 
    $('body').addClass('stop-scroll');
    setTimeout(function(){
        $('body').removeClass('stop-scroll');
    },5500);


    setInterval(function(){
        let now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let amPm = now.getHours() < 12 ? "AM" : "PM";
        $('.current_time').text(hr + ':' + min + ' ' + amPm);
        if(hr < 10){
            $('.current_time').text('0' + hr + ':' + min); 
        }
        if(min < 10){
            $('.current_time').text(hr + ':' + '0' + min);
        }
    },1000);

    let header = gsap.timeline();
    header.from('.header', { y:-150, duration: 1, delay: 4 });

});