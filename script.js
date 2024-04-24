$(document).ready(function() {
        
    var name = $("#register_username").val();
    var surname = $("#register_surname").val();
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    $("button#showPwd").click(function(e) {
        $(this).html("Clicked");
        let encPwd = $("#register_password").val();
        let mySpan = $("#clearPassword");
        
        console.log(encPwd);    //debug
        mySpan.text(encPwd);
    });

    function isEmail(email) {
        return emailPattern.test(email);
    }

    $("button#verifyEmail").click(function(e) {
        let email = $("#register_email").val();
        if (!isEmail(email)) {
            alert("Email non corretta!");
        }
    });

    var myArray = {
        "email": email,
        "Luigi": 20,
        "Giovanna": 19
    };

});
