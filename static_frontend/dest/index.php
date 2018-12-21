<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Testaris</title>
    <link rel="stylesheet" type="text/css" href="./slick/slick.css">
    <link rel="stylesheet" type="text/css" href="./slick/slick-theme.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <img src="images/logo.svg" alt="">
        <a href="#" id="ham"></a>
        <nav>
            <ul class="lang">
                <li>
                    <a href="#">DE</a>
                </li>
                <li>
                    <a href="#">FR</a>
                </li>
                <li>
                    <a href="#">EN</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Über uns</a>
                </li>
                <li>
                    <a href="#">Dienstleistungen</a>
                </li>
                <li>
                    <a href="#">Team</a>
                </li>
                <li>
                    <a href="#">Advisory Board</a>
                </li>
                <li>
                    <a href="#">Kontakt</a>
                </li>
            </ul>
        </nav>
    </header>
    <section>
        <div class="slider" data-sizes="50vw">
            <div>
                <h3>Revision ・ Sreuern ・ Treuhand</h3>
                <p>«Limporep ernate nonsequo de professionell sandit venac dant etur magni eumquo corit.»</p>
            </div>
            <div>
                <h3>Revision ・ Sreuern ・ Treuhand</h3>
                <p>«Limporep ernate nonsequo de professionell sandit venac dant etur magni eumquo corit.»</p>
            </div>
            <div>
                <h3>Revision ・ Sreuern ・ Treuhand</h3>
                <p>«Limporep ernate nonsequo de professionell sandit venac dant etur magni eumquo corit.»</p>
            </div>
        </div>
    </section>
    <script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
    <script src="./slick/slick.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript">
        $(document).on('ready', function() {
            $(".slider").slick({
                lazyLoad: 'ondemand', // ondemand progressive anticipated
                infinite: true
            });
        });
    </script>
    <script src="js/scripts.js"></script>
				
</body>
</html>