$(document).ready(function(){
    $("#login").click(function(e){
        e.preventDefault();
        var email = $("#email").val().trim();
        var password = $("#password").val().trim();
        $.ajax({
            url:'../php/login.php',
            method:'post',
            data:{email:email,password:password},
            success:function(response){
                var msg = "";
                console.log(response);
                if(response == 1){
                    $(location).attr('href','../main/abet.php');
                }else{
                    msg = "invalid e-mail or password";
                    $("#loginFail").html(msg); //display to the id
                    $("#loginFail").css("color", "red");
                    $("#loginFail").css("font-size", "1em");
                }
            },
            error:function(xhr, ajaxOptions, thrownError){
                console.log(xhr.status);
            }
        });	
});
});