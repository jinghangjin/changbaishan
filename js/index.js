/**
 * Created by Administrator on 2016/10/25.
 */
$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })
    var hoot = {
        init: function () {
            this.click();
        },
        //控制音乐事件
        click: function () {
            var orgent = true;
            $(".muisc").click(function () {
                var music = document.querySelector('#adiuos');
                if (orgent) {
                    music.pause();
                    $(this).css({
                        'animation-play-state': 'paused'
                    });
                    orgent = false;
                } else {
                    music.play();
                    $(this).css({
                        'animation-play-state': 'running'
                    });
                    orgent = true;
                }
            });
        }
    }
    hoot.init();
});
