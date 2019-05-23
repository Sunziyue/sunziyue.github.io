(function() {
    emailjs.init("user_6MAx7Wpisoox26OJNtsqJ");
    $('#messageDenger').hide();
    $('#messageSuccess').hide();
    $('#messageInfo').hide();
    $('[data-toggle="tooltip"]').tooltip();
})();


function handlerEmail() {
    $('#messageInfo').show();
    // var templateParams = {
    //     name: $('#name').val(),
    //     email: $('#email').val(),
    //     phone: $('#phone').val(),
    //     message_html: $('#message').val()
    // };
    // //语法 emailjs.send(serviceID, templateID, templateParams, userID);  
    // emailjs.send('outlook', 'template_fCJeeIyk', templateParams, "user_6MAx7Wpisoox26OJNtsqJ")
    //     .then(function(response) {
    //         $('#messageInfo').hide();
    //         $('#messageDenger').hide();
    //         $('#messageSuccess').show();
    //     }, function(error) {
    //         $('#messageInfo').hide();
    //         $('#messageSuccess').hide();
    //         $('#messageDenger').show();
    //     });
}