 $(function () {
     var $hh = $(window).height();
     var $oh = Number($hh) * 0.35
     var $dh = 368;
     var $ps = Number($oh) - Number($dh);
     $(".alternate .docker").css("top", $ps + 'px');
     var timer;
     var flag = true;

     function lock() {
         clearTimeout(timer);
         flag = false;
         timer = setTimeout(function () {
             flag = true;
         }, 200);
     }
     $('#fullpage').fullpage({
         navigation: true, // 显示导航
         loopBottom: true, // 顶部轮滚
         loopTop: false, // 顶部轮滚
         css3: true, // 开启CSS3动画
         fitToSection: false,
         normalScrollElements: '.modal',
         

         onLeave: function (index, nextIndex, direction) {
             var box = $("#box");
             if (index === 6 && nextIndex === 1) {
                 box.addClass("bottom");
                 return false;
             }
             if (index === 6 && nextIndex === 5 && box.hasClass("bottom")) {
                 lock();
                 box.removeClass("bottom");
                 return false;
             }

             // 返回事件阻塞
             return flag;
         }
     });
 });
 $(function () {
     $(window).resize(function () {
         autoScrolling();
     });

     function autoScrolling() {
         var $ww = $(window).width();
         if ($ww < 1024) {
             $.fn.fullpage.setAutoScrolling(false);
             $("#fp-nav").css("display", "none");
         } else {
             $.fn.fullpage.setAutoScrolling(true);
             $("#fp-nav").css("display", "block");
         }
     }
     autoScrolling();
 });