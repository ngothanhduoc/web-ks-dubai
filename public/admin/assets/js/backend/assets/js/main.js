$(function () {
    //load giao dien cac vong tron
    var total = window.innerHeight;
    $('.shadow').hide();
   
    $('.close').click(
            function () {
                $('.shadow').removeClass('animated zoomIn');
                $('.shadow').addClass('animated zoomOut');

                setTimeout(function () {
                    $('.shadow').hide();
                }, 1000);
            }
    )
    $('.feedback').click(function () {
        $('.shadow').show().removeClass('animated zoomOut');
        $('.shadow').show().addClass('animated zoomIn');
    })

    
    
    function hoverCircle() {
        $('.circle').hover(
                function () {
                    $(this).addClass('animated_fast pulse');
                    $style = $('.content').attr('style');
                    if ($style != undefined) {
                        if (position == 'right') {
                            $('.circle-main').addClass('deg45');
                            $('.circle-main').removeClass('deg0');
                        }
                        if (position == 'left') {
                            $('.circle-main').addClass('deg0');
                            $('.circle-main').removeClass('deg45');
                        }
                    }
                },
                function () {
                    $(this).removeClass('animated_fast pulse');

                }
        );
    }
    ;
    $("div.tab").click(function () {
        $("div.tab").removeClass('tab_active');
        $(this).addClass('tab_active');
    })
    
})
