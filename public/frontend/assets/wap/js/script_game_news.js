    $(document).ready(function() {
         FRONTEND.init();
    });


var FRONTEND = {
    API_URL_LIST: '/loadgamenews',
	
    init: function() {
        FRONTEND.allNews(0);
    },
	
    allNews: function(p){
        var id = $('#id_game').val();
        $.ajax({
            url: FRONTEND.API_URL_LIST + '?page=' + p + '&offset=6&id=' + id,
            type: 'GET',
            dataType: 'JSON',
            data: {}
        }).done(function(response) {
            if (response.code != 100) {
                //alert(response.data);
                $('#news-all-more').html('');
            } else {
                console.log(response);
                var html = '<table width="100%" border="0" cellspacing="0" cellpadding="0" class="list-news">';
                var data = response.data;
                
                for(var i = 0; i < data.length; i++){
                                
                    html += '<tr>' +
                               '<td width="90"  style="border-bottom: #e9e9e9 dashed 1px; padding: 5px 0px"><a href="/news-event-detail/' + data[i].id_news + '-' + FRONTEND.Alias(data[i].title) + '.html"><img src="' + data[i].image_banner + '" width="82px" /></a></td>' +
                               '<td valign="top"  style="border-bottom: #e9e9e9 dashed 1px; padding: 5px 0px; position: relative">'+
                                   '<a href="/news-event-detail/' + data[i].id_news + '-' + FRONTEND.Alias(data[i].title) + '.html">'+
                                      '<h3>' + data[i].title + '</h3>' +
                                      '<span>' + data[i].create_time + '</span>'+
                                   '</a>'+
                               '</td>'+
                           '</tr>';

                }
                
                html += '</table>';
                $('#news-all').append(html);
                
                var i = p + 6;
                
                var more = '<a href="#'+i+'" style="color: #868686"><span onclick="FRONTEND.allNews(' + i + ');">Xem Thêm</span></a>';
                
                $('#news-all-more').html(more);
                
            }
        }).fail(function() {
            //alert('Có lỗi ! Không kết nối đến dữ liệu được.');
            $('#news-all-more').html('');
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
