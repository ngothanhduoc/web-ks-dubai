<script src="/public/frontend/assets/js/sliderengine/initslider-1.js"></script>
<div class="slide" id="home-main">
    <div id="amazingslider-1" style="display:block;position:relative;margin:0 auto;">
        <ul class="amazingslider-slides" style="display:none;">
            <?php
                foreach ($slide as $key => $value) {
            ?>
            <li>
                <img src="<?php echo $value['image'] ?>" alt="<?php echo $value['name'] ." - ".  $value['description'] ?>" />
            </li>
           <?php
                }
           ?>
        </ul>


    </div>
</div>
