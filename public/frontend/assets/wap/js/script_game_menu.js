    $(document).ready(function() {
         GAMEMENU.init();
    });


var GAMEMENU = {
    API_URL_LIST: '/loadgamemenu',
	
    init: function() {
        //GAMEMENU.allGame();
    },
	
    allGame: function(){
        
        $.ajax({
            url: GAMEMENU.API_URL_LIST,
            type: 'GET',
            dataType: 'JSON',
            data: {}
        }).done(function(response) {
            if (response.code != 100) {
                alert(response.data);               
            } else {
                console.log(response);
                var html = ' <table width="100%" border="0" cellpadding="0" cellspacing="0">';
                var data = response.data;
                
                for(var i = 0; i < data.length; i++){
                    var plat = $.parseJSON(data[i].platform);
                    var pla = '';
                    for(var j=0; j < plat.length; j++){
                        
                        pla += '<img src="/frontend/assets/images/suport-' + plat[j].toLowerCase() + '.png">&nbsp;';
                    }           
                     html += '<tr>'+
                                '<td width="75px" class="td-format"><a href="/game-detail/' + data[i].id_game + '-' + GAMEMENU.Alias(data[i].full_name) + '.html"><img src="'+data[i].logo_game+'" style="max-width: 100%"></a></td>'+
                                '<td class="td-format"><a href="/game-detail/' + data[i].id_game + '-' + GAMEMENU.Alias(data[i].full_name) + '.html" style="color: #585858">'+
                                    '<p class="name">'+GAMEMENU.trim_words(data[i].full_name,5)+'</p>'+
                                    '<p class="user"><spans class="format-number">'+data[i].number_of_users+'</spans> người chơi</p>'+
                                    '<p>'+
                                       pla +
                                    '</p>'+
                                '</a></td>'+
                                '<td width="80" class="td-format"><a href="'+data[i].url_download+'"><img src="'+data[i].play_img+'" width="70"></a></td>'+
                            '</tr>';
                   
                   
                   

                }
                
                html += '</table>';
                $('#all-game-menu').html(html);
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
            alert('Có lỗi ! Không kết nối đến dữ liệu được.');            
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
