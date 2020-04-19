<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" type="text/css" href="../styles/nav.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"></script>
    </head>
    <body>
        <script src="../scripts/nav.js"></script>
        <header>
            <div id="abet">
                <a class="utk-abet" href="abet.php"><h2>UTK ABET</h2></a>
            </div>
            <div id="profile">
                <h2>
                <img class="person" src="../images/person.png" alt="person.png">
                <img class="caret" src="../images/caret-bottom-2x.png" alt="caret.png">
                <div id="userMenu">
                    <a href="#" id="changePassword">change password</a>
                    <a href="#" id="logout">log out</a>
                </div>
                </ul>
                </h2>
            </div>
            </header>
            <div id="container">
            <nav class="nav-container">
                <h1 class="container-section-title">Section:</h1>
                <div class="section-dropdown">
                <form method="GET">
                <select id="sectionMenu" class="course-dropdown" size="1">
                    <?php
                        for($x=0; $x < count($_SESSION['menuItems']); $x++){
                    ?>
                    <option id="section<?php echo $x+1;?>" value="<?php echo $_SESSION['major'][$x] . " " .$_SESSION['sectionId'][$x]; ?>"><?php echo $_SESSION['menuItems'][$x]?></option>
                    <?php
                        }
                    ?>
                </select>
                </form>
            </div>
            <div class="outcome-links">
                <hr class="new-hr">
            </div>
        </nav>

    </body>
</html>
