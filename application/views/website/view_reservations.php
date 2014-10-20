<div id="reservations-main" class="box-info">
    <h1>MAKE A RESERVATION</h1>
    <div class="form-contact">
        <div id="tel">
            <p>T: 123-456-7890</p>
            <p>info@mysite.com</p>
            ​
            <p>﻿We take reservations for parties of 6 or more.</p>
        </div>
        <div class="alert">Thanks for send contact message!</div>
        <form method="post" action="" id="form-action">
            <div id="form-info">
                <div id="form-info-input">
                    <input name="name" placeholder="NAME" value="" type="text" required=""/><br/>
                    <input name="email" placeholder="EMAIL" value="" type="email" required=""/><br/>
                    <input name="subject" placeholder="SUBJECT" value="" type="text" required=""/>
                </div>
                <div id="form-info-textarea">
                    <textarea name="message" placeholder="MESSAGE"></textarea>
                    <input type="button" name="submit" class="send-contact" value="SEND" />
                </div>

            </div>
        </form>
    </div>
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.771702977232!2d55.303464728200524!3d25.23884724763087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f5f4de7ff737ce!2sRasa+Sayang+restaurant!5e0!3m2!1svi!2s!4v1412355199776" width="910" height="215" frameborder="0" style="border:0"></iframe>
    </div>
</div>
<script>
    $(function () {
        $('.send-contact').click(function () {
            $('.alert').fadeIn();
            data = $('#form-action').serializeArray();
            $.ajax({
                url: '/send-mail',
                type: 'POST',
                dataType: 'JSON',
                data: data
            }).done(function (response) {
                console.log(response);
            });
        })
    });
</script>