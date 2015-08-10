$(document).ready(function () {
    $('div.escribo-en > a').hover(
        function () {
            $(this)
                .transition('pulse');
        },
        function () {

        });

    var $form = $('#mailing-list');
    $form.form({
        fields: {
            email: {
                identifier: 'mce-EMAIL',
                rules: [
                    {
                        type: 'empty',
                        prompt: ''
          },
                    {
                        type: 'email',
                        prompt: 'La dirección de correo electrónico no es válida'
          }
        ]
            }
        }
    });
    // I only have one form on the page but you can be more specific if need be.


    if ($form.length > 0) {
        $('form input[type="submit"]').bind('click', function (event) {
            if (event) event.preventDefault();
            // validate_input() is a validation function I wrote, you'll have to substitute this with your own.
            if (validate_input($form)) {
                register($form);
            }
        });
    }
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
