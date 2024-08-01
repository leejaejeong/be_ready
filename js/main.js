$(document).ready(function(){
    setInterval(function(){
        let now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        $('.current_time').text(hr + ':' + min);
        if(hr < 10){
            $('.current_time').text('0' + hr + ':' + min); 
        }
        if(min < 10){
            $('.current_time').text(hr + ':' + '0' + min);
        }
    },1000);

    let header = gsap.timeline();
    header.from('.header', { y:-150, duration: 1, delay: 3.5 });

});