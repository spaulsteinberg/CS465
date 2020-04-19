$(document).ready(function(){
    $("#submitbtn").click(function(e){
        e.preventDefault();
        var newpw = $("#newPassword").val().trim();
        var confirmpw = $("#confirmPassword").val().trim();
        if(newpw !== confirmpw){
            //passwords do not match
            $("#passwordSucceeded").text("");
            $("#passwordError").text("passwords do not match--please make them match");
            return;
        }
        var email = "<?php echo $_SESSION['email']; ?>";
        $.ajax({
            type: "POST",
            url: "../php/updatePassword.php",
            data: {
                email: email,
                password: newpw,
            },
            success: function(response){
                var msg = "";
                console.log("response" + response);
                if(response === "success"){
                    $("#passwordError").text("");
                    $("#passwordSucceeded").text("password changed");
                }
            },
            error: function(data){
                console.log(data);
            }
        });
    });
});