<script src="/public/frontend/assets/wap/js/simple-inheritance.min.js"></script>
<script src="/public/frontend/assets/wap/js/code-photoswipe-jQuery-1.0.11.min.js"></script>
<script>
    $(function () {
        $(".show-more").click(function () {
            $page = $(this).attr('id');
            $.ajax({
                url: "ajax_product?page=" + $page,
                type: 'GET',
                dataType: '',
                data: {}
            }).done(function (response) {
                if (response != 'end') {
                    $(".main-list-about ul").append(response);
                    $page = parseInt($page) + 12;
                    $(".show-more").attr('id', $page);
                } else {
                    $(".show-more").remove();
                }

            }).fail(function () {
                alert('Có lỗi ! Không kết nối đến dữ liệu được.');
            });
        });
    });
</script>
<script type="text/javascript">
    $(document).ready(function () {

        var myPhotoSwipe = $("#Gallery a").photoSwipe();

    });
</script>
<div id="about-main">
    <div class="main-about">
        <?php
        echo $fulltext;
        ?>
    </div>
    <div class="list-about">
        <h3>THE ART OF SUSHI </h3>
        <br/>
        <div class="main-list-about">
            <div id="Gallery">
                <ul>
                    <?php
                    foreach ($product as $key => $value) {
                        ?>

                        <li>
                            <div class="main-list-li" >
                                <div class="list-imag">
                                    <a  href="<?php echo $value['image_big'] ?>"> <img class="thumbnail"  alt="<?php echo $value['name'] . ' ' . $value['description'] ?>" src="<?php echo $value['image_small'] ?>" width="215px" height="128px"/></a>
                                </div>
                                <div class="sub-title">
                                    <span><h2><?php echo word_limiter($value['name'], 3) ?></h2></span>
                                    <span><?php echo word_limiter($value['description'], 10) ?> </span>
                                </div>
                            </div>
                        </li>

                    <?php } ?>

                </ul>
            </div>
            <div class="show-more" id="12"> Show More </div>
        </div>
    </div>
</div>
