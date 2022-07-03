
// 
var swiper = new Swiper(".dog_swiper", {
    // 箭頭設定值 nextEl:下一張 prevEl:上一張
    navigation: {
        nextEl: ".lessone1_right",
        prevEl: ".lessone1_left",
    },
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    
});


$('.dog_swiper').hover(function(){
    (this).swiper.autoplay.stop();
},function(){
    (this).swiper.autoplay.start();
})