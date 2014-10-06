<script lang="text/javascript">
    $(function () {
        $(".slides").responsiveSlides({
            auto: true,
            pager: false,
            nav: true,
            speed: 200,
            namespace: "callbacks"
        });
    })
</script>
<div class="slide" id="home-main">

    <ul class="slides">
        <?php
        foreach ($slide as $key => $value) {
            ?>
            <li>
                <img src="<?php echo $value['image'] ?>" alt="<strong><?php echo $value['name'] . "</strong> " . $value['description'] ?>" />
                <div class="caption"><strong><?php echo $value['name'] . "</strong> " . $value['description'] ?></div>
            </li>
            <?php
        }
        ?>
    </ul>


</div>


