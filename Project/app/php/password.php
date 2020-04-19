<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../styles/password.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"></script>
        <meta charset="UTF-8">
        <?php session_start(); ?>
    </head>
    <body>
        <script src="../scripts/password.js"></script>
        <?php include '../main/nav.php' ?>
        <main>
        <h1>Change Password<hr></h1>
        <div class="box box1">
            <div class="header">
                Basic Info
            </div>
            <div class="nameemail">
                <p><strong>Name: </strong><?php echo $_SESSION['firstname'] . " " . $_SESSION['lastname'] ?></p>
                <p><strong>Email: </strong><?php echo $_SESSION['email'] ?></p>
            </div>
        </div>
        <div class="box box2">
            <div class="header">
                Change Password
            </div>
            <form class="changepassword">
                <p>
                    <strong>New Password</strong>
                </p>
                <input type="password" maxlength="20" id="newPassword">
                <p>
                    <strong>Confirm Password</strong>
                </p>
                <input type="password" maxlength="20" id="confirmPassword">
                <br><br>
                <input type="submit" id="submitbtn">
                <span id="passwordError"></span>
                <span id="passwordSucceeded"><span>
            </div>
        </div>
        </main> 
    </body>
</html>