<!DOCTYPE html>
<html>
    <style>
    </style>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Contact</title>
            <link rel='icon' href='../views/resources/petname.ico' type='image/x-icon'/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">  
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>      
        <link href="css/projectCSS.css" rel="stylesheet">
        <script src="scripts/myscripts.js"></script>
    </head>
    <body>
        <!-- NAVBAR -->
        <div class="nav-area">
            <nav id="home_nav" class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a id="logo" class="navbar-brand" href="#">Pet Name Generator</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link px-3" href="index.php">Home</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="about_us.php">About Us</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="contact.php">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
         <div class="p-5 bg-image text-center" id="banner">
            <div class="textbox" style="width: 600px; height:auto; margin-top: 100px">
                <h1>Contact Us!</h1>
                <form class="contact-form" method="POST" enctype="text/plain" name="EmailSend"> <br>
                    <input type="text" name="name"  class="contactform" placeholder="Full Name"> <br><br>
                    <textarea name="message" class="contactform" placeholder="Message"></textarea><br> <br>
                    <br><br> <input type="submit" value="Submit" onclick="insert_User_Message()"> 
                </form>
            </div>
            </main>
        </div>
    </body>
    <footer class="bg-light">
        <div id="copyright" class="text-center">
            © 2021 Copyright: The Companions
        </div>
    </footer> 
</html>
