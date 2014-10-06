$(document).ready(function () {

    BACKEND.init();
});


var BACKEND = {
    API_URL_HOME: 'ajax_home',
    API_URL_ABOUT: 'ajax_about',
    API_URL_MENU: 'ajax_menu',
    API_URL_RES: 'ajax_reservations',
    OBJ_GRID: null,
    init: function () {
        $(".navi-menu").click(function () {
            var $class = $(".main-navi").find(".active").attr("id");
            var $this_class = $(this).attr('id');
            if($class != $this_class){
                $("#" + $class).removeClass("active");
                $("#" + $class + "-main").animate({
                    opacity: 0,
                }, 700, function () {
                    $("#" + $class + "-main").remove();
                });
                $(this).addClass("active");
                
                switch ($this_class){
                    case "home":
                        BACKEND.ajax_all(BACKEND.API_URL_HOME);
                        break;
                    case "about":
                        BACKEND.ajax_all(BACKEND.API_URL_ABOUT);
                        break;
                    case "menu":
                        BACKEND.ajax_all(BACKEND.API_URL_MENU);
                    break;
                    case "reservations":
                        BACKEND.ajax_all(BACKEND.API_URL_RES);
                    break;
                };
            }
        });
        BACKEND.ajax_all(BACKEND.API_URL_HOME);

    },
    ajax_all: function ($url) {
        $.ajax({
            url: $url,
            type: 'GET',
            dataType: '',
            data: {}
        }).done(function (response) {
            BACKEND.main_ajax(response);
        }).fail(function () {
            alert('Có lỗi ! Không kết nối đến dữ liệu được.');
        });
    },
    main_ajax: function ($data) {
        $(".main-ajax").hide();
        $(".main-ajax").fadeIn(2000).html($data);
    },
}