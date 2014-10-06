<?php
foreach ($product as $key => $value) {
    ?>

    <li>
        <div class="main-list-li" >
            <div class="list-imag">
                <div class="gallery-item"> <a href="<?php echo $value['image_big'] ?>"> <img class="thumbnail"  alt="<?php echo $value['name'] . ' ' . $value['description'] ?>" src="<?php echo $value['image_small'] ?>" width="215px" height="128px"/></a></div>
            </div>
            <div class="sub-title">
                <span><h2><?php echo word_limiter($value['name'], 3) ?></h2></span>
                <span><?php echo word_limiter($value['description'], 10) ?> </span>
            </div>
        </div>
    </li>

<?php } ?>
<script>
    $(".main-list-li").hide();
    $(".main-list-li").fadeIn("slow");

</script>
<script type="text/javascript">
    $(document).ready(function () {

        var myPhotoSwipe = $("#Gallery a").photoSwipe();

    });
</script>