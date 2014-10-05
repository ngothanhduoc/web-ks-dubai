    $(document).ready(function() {
         FRONTEND.init();
    });


var FRONTEND = {
    API_URL_GAME_HOT: '/loadgamehot',
    API_URL_GAME_ALL: '/loadallgamewap',

    init: function() {
        FRONTEND.allGame(0);
        FRONTEND.hotGame(0);
    },
	
    allGame: function(p){
        $.ajax({
            url: FRONTEND.API_URL_GAME_ALL + '?page=' + p + '&offset=6',
            type: 'GET',
            dataType: 'JSON',
            data: {}
        }).done(function(response) {
            if (response.code != 100) {
                //alert(response.data);
                $('#game-all-more').html('');
            } else {
                console.log(response);
                var html = '';
                var data = response.data;
                var total = response.total;
                for(var i = 0; i < data.length; i++){
                    //var plat = data[i].platform.split(",");
                    var plat = $.parseJSON(data[i].platform);
                    var pla = '';
                    for(var j=0; j < plat.length; j++){
                        
                        pla += '<span class="suport-img" title="'+plat[j]+'"><img src="/frontend/assets/images/suport-' + plat[j].toLowerCase() + '.png"></span>';
                    }
                
                    html += '<div class="box-game">'+
                                 '<a href="/game-detail/' + data[i].id_game + '-' + FRONTEND.Alias(data[i].full_name) + '.html">'+
                                     '<img src="' + data[i].logo_game + '" height="70px" />'+
                                     '<span class="name">'+data[i].full_name+'</span>'+
                                     '<span class="desc">'+FRONTEND.trim_words(data[i].description,10)+'</span>'+
                                     '<span class="user"><spans class="format-number">'+data[i].number_of_users+'</spans> người chơi</span>'+
                                     '<span class="box-suport">'+

                                     pla +

                                     '</span>'+
                                 '</a>'+
                             '</div>';

                }
                
                $('#game-all').append(html);
                
                var i = p + 6;
                 if(i <= total - 1){
                var more = '<a href="#'+i+'" style="color: #868686; display: block" onclick="FRONTEND.allGame(' + i + ');"><span>Xem Thêm</span></a>';
                 }else{
                     var more = '';
                 }
                $('#game-all-more').html(more);
                $('.format-number').formatCurrency({
                    roundToDecimalPlace: 0,
                    symbol: '',
                    positiveFormat: '%n',
                    negativeFormat: '-%n',
                    decimalSymbol: ',',
                    digitGroupSymbol: '.',
                    groupDigits: true
                });
            }
        }).fail(function() {
            //alert('Có lỗi ! Không kết nối đến dữ liệu được.');
            $('#game-all-more').html('');
        });
    },
    hotGame: function(p){
        $.ajax({
            url: FRONTEND.API_URL_GAME_HOT + '?page=' + p + '&offset=3',
            type: 'GET',
            dataType: 'JSON',
            data: {}
        }).done(function(response) {
            if (response.code != 100) {
                //alert(response.data);
                $('#game-hot-more').html('');
            } else {
                console.log(response);
                var html = '';
                var data = response.data;
                var total = response.total;
                for(var i = 0; i < data.length; i++){
                    //var plat = data[i].platform.split(",");
                    var plat = $.parseJSON(data[i].platform);
                    var pla = '';
                    for(var j=0; j < plat.length; j++){
                        
                        pla += '<span class="suport-img" title="'+plat[j]+'"><img src="/frontend/assets/images/suport-' + plat[j].toLowerCase() + '.png"></span>';
                    }
                
                    html += '<div class="box-game">'+
                                 '<a href="/game-detail/' + data[i].id_game + '-' + FRONTEND.Alias(data[i].full_name) + '.html">'+
                                     '<img src="' + data[i].logo_game + '" height="70px" />'+
                                     '<span class="name">'+data[i].full_name+'</span>'+
                                     '<span class="desc">'+FRONTEND.trim_words(data[i].description,10)+'</span>'+
                                     '<span class="user"><spans class="format-number">'+data[i].number_of_users+'</spans> người chơi</span>'+
                                     '<span class="box-suport">'+

                                     pla +

                                     '</span>'+
                                 '</a>'+
                             '</div>';

                }
                
                $('#game-hot').append(html);
                
                
                var i = p + 3;
                if(i <= total - 1){
                    var more = '<a href="#'+i+'" style="color: #868686; display: block" onclick="FRONTEND.hotGame(' + i + ');"><span>Xem Thêm</span></a>';
                }else{
                    var more = '';
                }
                $('#game-hot-more').html(more);
                $('.format-number').formatCurrency({
                    roundToDecimalPlace: 0,
                    symbol: '',
                    positiveFormat: '%n',
                    negativeFormat: '-%n',
                    decimalSymbol: ',',
                    digitGroupSymbol: '.',
                    groupDigits: true
                });
            }
        }).fail(function() {
            //alert('Có lỗi ! Không kết nối đến dữ liệu được.');
            $('#game-hot-more').html('');
        });
    },
   	
    Alias: function(aa){
			as = aa.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ.+/g,"e");
			as= as.replace(/%/g,""); 
			as = as.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ.+/g,"a");
			as = as.replace(/ì|í|ị|ỉ|ĩ/g,"i");
			as = as.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ.+/g,"o");
			as = as.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
			as = as.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
			as = as.replace(/đ/g,"d");
			as = as.replace(/ /g,"-");
			as = as.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ.+/g,"e");
			as = as.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ.+/g,"a");
			as = as.replace(/Ì|Í|Ị|Ỉ|Ĩ/g,"i");
			as = as.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ.+/g,"o");
			as = as.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"u");
			as = as.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,"y");
			as = as.replace(/Đ/g,"d");
			as = as.replace(/^\A-Z/g,"d");

       /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */ 
		   as= as.replace(/-+-/g,""); //thay thế 2- thành 1- 
		   as= as.replace(/^\-+|\-+$/g,""); 
		   as= as.replace(/%/g,""); 
		   as = as.toLowerCase();
		   
		   return as;
	},


       trim_words:  function(theString, numWords) {
            expString = theString.split(/\s+/,numWords);
            theNewString=expString.join(" ");
            return theNewString;
        }


}
