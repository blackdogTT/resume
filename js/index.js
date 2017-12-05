$().ready(
    function () {

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
            var current;
            // console.log(event.wheelDelta);
            if (event.wheelDelta === -120){
            //    向下滚动,
                $('.container .container-fluid').each(function (index,t) {
                    if ($(t).css('display') !== 'none' && index < $('.container .container-fluid').length){
                        current = index+1;
                    }
                });
                $('.container .container-fluid').eq(current).slideDown(500).siblings('.container-fluid').slideUp(500);
                console.log(current);

            }
            else if (event.wheelDelta === 120){
            //    向上滚动
                $('.container .container-fluid').each(function (index,t) {
                    if ($(t).css('display') !== 'none' && index >0){
                        current = index-1
                    }
                });
                $('.container .container-fluid').eq(current).slideDown(500).siblings('.container-fluid').slideUp(500);
            }
        })
    }
);
function scroll() {
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            // downscroll code
            $('.container .container-fluid').each(function (index,t) {
                if (t.display !== 'none' || index < $('.container .container-fluid').length){
                    $('.container .container-fluid').eq(index+1).slideDown(500).siblings('.container-fluid').slideUp(500)
                }
            })
        } else {
            // upscroll code
        }
        lastScrollTop = st;
    });
}