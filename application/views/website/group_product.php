<script>
    
    $(function () {
        var $group;
        $("img.category").click(function () {
            $group = $(this).attr('id');
            $page = 0;
            $(".list-group").fadeOut("fast");
            $(".product-list").fadeIn("fast");
            $title = $(this).attr('alt');
            $title = "<span class='back'>CATEGORY / </span>" + $title;
            $.ajax({
                url: "ajax_product?group=" + $group,
                type: 'GET',
                dataType: '',
                data: {}
            }).done(function (response) {
                if (response != 'end') {
                    $(".product-list ul").append(response);
                    $(".product-list h3").html($title);
//                    $page = parseInt($page) + 12;
                    $(".show-more").attr('id', $page);
                    $("span.back").click(function () {
                        $(".product-list ul").html('');
                        $(".list-group").fadeIn("fast");
                        $(".product-list").fadeOut("fast");
                    })
                    $(".show-more").show();
                    $(".show-more").click(function () {
                        $page = $(this).attr('id');
                        $.ajax({
                            url: "ajax_product?page=" + $page +"&group=" + $group,
                            type: 'GET',
                            dataType: '',
                            data: {}
                        }).done(function (response) {
                            if (response != 'end') {
                                $(".detail-product-list ul").append(response);
                                $page = parseInt($page) + 12;
                                $(".show-more").show();
                                $(".show-more").attr('id', $page);
                            } else {
                                $(".show-more").hide();
                            }

                        }).fail(function () {
                            alert('Có lỗi ! Không kết nối đến dữ liệu được.');
                        });
                    });
                } else {
                    $(".show-more").hide();
                }

            })
        });

    });
</script>

<style>
    .main-list-li-group {
        width: 445px;
    }
    .list-imag-group {
        background: #fff;
        height: 180px;
        cursor: pointer;
    }
    .main-list-li-group span{
        display: block;
        padding-left: 5px;
        padding-top: 5px;
        font-weight: bold;
    }
</style>
<div id="about-main" class="list-group">

    <div class="list-about">
        <h3>CATEGORY</h3>
        <br/>
        <div class="main-list-about">
            <div id="Gallery">
                <ul>
                    <?php
                    foreach ($group_product as $key => $value) {
                        ?>

                        <li>
                            <div class="main-list-li-group" >
                                <div class="list-imag-group">
                                    <img class="thumbnail category"  id="<?php echo $value['id_group_product'] ?>"  alt="<?php echo $value['name'] ?>" src="<?php echo $value['images'] ?>" width="445px" height="180px"/>
                                </div>
                                <span><?php echo $value['name'] ?></span>
                            </div>
                        </li>

                    <?php } ?>

                </ul>
            </div>

        </div>
    </div>
</div>



<div class="product-list">
    <h3></h3>
    <br/>
    <div class="main-list-about detail-product-list">
        <div id="Gallery">
            <ul>

            </ul>
        </div>
        <div class="show-more" id="12"> Show More </div>
    </div>  
</div>


