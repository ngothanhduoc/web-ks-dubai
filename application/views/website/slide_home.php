<script src="/public/frontend/assets/js/sliderengine/initslider-1.js"></script>
<div class="slide" id="home-main">
    <div id="amazingslider-1" style="display:block;position:relative;margin:0 auto;">
        <ul class="amazingslider-slides" style="display:none;">
            <?php
            foreach ($slide as $key => $value) {
                ?>
                <li>
                    <img src="<?php echo $value['image'] ?>" alt="<?php echo $value['name'] . " " . $value['description'] ?>" />
                </li>
                <?php
            }
            ?>
        </ul>


    </div>
    <div class="info-company">
        <p>
            RASA SAYANG is named after a famous Malaysian folk song, which means “Taste of Love”. We are inspired by the meaningful lyrics of the song and the rhythm. We cook our authentic delicious food with love and therefore Rasa Sayang restaurant is born to bring you truly ‘Taste of Love”.

            At Rasa Sayang, we serve Malaysian cuisine, similar to that of South East Asian countries. Our food reflects the unique multiethnic culture and a symphony of flavour that customers will always remember.

            With our experienced and dedicated chefs who are from Malaysia, our aim is to be one of the little ambassadors to introduce and promote Malaysian authentic dishes to the eyes of the world. With our love, passion and interest, Rasa Sayang restaurant brings you, those who miss authentic home-cooked food, a memorable experience to enjoy our variety of food selection (dine in, home delivery or private catering).

            We welcome you to Rasa Sayang, Malaysia restaurant in Dubai. Sit back, relax and enjoy our Malaysian hospitality together with a myriad of culinary delights.

        </p></br>
        <p>SELAMAT MENJAMU SELERA.</p>
    </div>
</div>
