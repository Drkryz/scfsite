<?php
include("./navbar/navbar.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="./css/main.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <title>Scutfy - Music Player</title>
</head>

<body>
    <?php echo $navbar ?>
    <div class="container-fluid d-flex content-center justify-content-center p-3 flex-column background">
        <div class="row d-flex justify-content-center pt-lg-5 pt-5">
            <div class="col d-flex justify-content-center align-items-center flex-column">
                <div class="container p-3 p-lg-5 pt-5">
                    <h1>Ouça musicas locais gratuitamente e sem interrupções</h1>
                    <p class="m-0">- Scutfy não tem anuncios, é totalmente gratuito e offline.</p>
                    <p class="m-0">- Atualizações constantes para sempre manter-se seguro</p>
                    <p class="m-0">- Codigo aberto</p>
                </div>
                <div class="social-box rounded">
                    <a href="https://instagram.com/scutfy">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="https://github.com/drkryz">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href="https://twitter.com/drkryzproject">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href="https://facebook.com/drkryzproject">
                        <i class="bi bi-meta"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg-5 d-none d-lg-flex justify-content-center pt-5">
                <img src="./assets/melody.png">
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>

</html>