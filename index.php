<!DOCTYPE html>
<html>
    <style>
    </style>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Homepage</title>
            <link rel='icon' href='../views/resources/petname.ico' type='image/x-icon'/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link href="css/projectCSS.css" rel="stylesheet">
        <script src="scripts/myscripts.js"></script>
    </head>
    <body onload="loadCSS()">
        <!-- NAVBAR -->
        <header>
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
        <!-- SECTION WITH BACKGROUND BANNER -->
            <div class="p-5 bg-image text-center" id="banner">
                <!-- QUESTION BOX -->
                <div class="d-flex justify-content-center align-items-center h-80">
                    <span class="border border-white">
                        <div class="jumbotron jumbotron-fluid bg-dark" id="ans_background">
                            <h1 class="display-4" id="question">Quiz</h1>
                              <span class="display-4" id="answer">
                              </span>
                    </span>
                        <div class="card-group" id="question box">
                            <!-- CHOICE 1 -->
                            <div class="card text-center" id="choice1">
                                <img class="card-img-top" src="resources/question.jpg" id="choice1_img" alt="choice1 img">
                                <div class="card-body bg-dark">
                                    <button type="button" class="btn btn-outline-light btn-block" id="choice1_btn" onclick="questionAnswer(1)">Start Quiz</button>
                                </div>
                            </div>
                            <!-- CHOICE 2 -->
                            <div class="card text-center" id="choice2">
                                <img class="card-img-top" src="#" id="choice2_img" alt="choice2 img">
                                <div class="card-body bg-dark">
                                    <button type="button" class="btn btn-outline-light btn-block" id="choice2_btn" onclick="questionAnswer(2)">Choice 2</button>
                                </div>
                            </div>
                            <!-- CHOICE 3 -->
                            <div class="card text-center" id="choice3">
                                <img class="card-img-top" src="#" id="choice3_img" alt="choice3 img">
                                <div class="card-body bg-dark">
                                    <button type="button" class="btn btn-outline-light btn-block" id="choice3_btn" onclick="questionAnswer(3)">Choice 3</button>
                                </div>
                            </div>
                            <!-- CHOICE 4 -->
                            <div class="card text-center" id="choice4">
                                <img class="card-img-top" src="#" id="choice4_img" alt="choice4 img">
                                <div class="card-body bg-dark">
                                    <button type="button" class="btn btn-outline-light btn-block" id="choice4_btn" onclick="questionAnswer(4)">Choice 4</button>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="bg-dark">
                            <button type="button" class="btn btn-outline-light btn-block" id="skip" onclick="questionAnswer(0)">Skip Quiz</button>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
        </header>
    </body>
    <footer class="footer bg-light">
        <div id="copyright" class="text-center">
            ?? 2021 Copyright: The Companions
        </div>
    </footer>
</html>
