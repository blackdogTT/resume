$().ready(
    function () {

        //点击切换页面
        $('header .col-md-5 .col-md-3').each(function (index,t) {

            $(t).on('click',function () {
                $('.container .container-fluid').eq(index).slideDown(500).siblings('.container-fluid').slideUp(500)
            })
        });
        $('.container').css({
            'padding-top': '50px'
        });
        //鼠标滚动事件
        window.addEventListener('mousewheel',function () {
            var pages = $('.page');
            var current;

            if (event.wheelDelta === -120){
            //    向下滚动,
                pages.each(function (index,t) {
                    if ($(t).css('display') !== 'none' && index < pages.length){
                        current = index+1;
                    }
                });

                //如果没有动画，则翻页
                if (!pages.eq(current-1).is(':animated')&&!pages.eq(current+1).is(':animated')){
                    pages.eq(current).slideDown(500).siblings('.page').slideUp(500);
                }

            }
            else if (event.wheelDelta === 120){
            //    向上滚动
                pages.each(function (index,t) {
                    if ($(t).css('display') !== 'none' && index >0){
                        current = index-1
                    }
                });
                //如果没有动画，则翻页
                if (!pages.eq(current-1).is(':animated')&&!pages.eq(current+1).is(':animated')){
                    pages.eq(current).slideDown(500).siblings('.page').slideUp(500);
                }
            }
        })
    }
);
