$(document).ready(function () {
    $('div.escribo-en > a').hover(
        function () {
            $(this)
                .transition('pulse');
        },
        function () {

        });


    function register($form) {
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            cache: false,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            error: function (err) {
                alert("Could not connect to the registration server. Please try again later.");
            },
            success: function (data) {
                if (data.result != "success") {
                    // Something went wrong, do something to notify the user. maybe alert(data.msg);
                } else {
                    // It worked, carry on...
                }
            }
        });
    }
});
