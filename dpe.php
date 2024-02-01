<?php

 $chauff = 22500;
 $sanitaire = 8625;
 $refroi = 0;
 $eclair = 690;
 $aux = 690;
 
    
    echo  'L énergie totale pour les usages recensées est de ' .($chauff + $sanitaire + $refroi + $eclair + $aux). ' kWh';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="64x64" href="Images/Logo.jpg">
    <link rel="stylesheet" type="text/css" href="dpe.css">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap" rel="stylesheet">
    <title>Immobilier CO</title>
</head>
<body>
    <section class="css-selector">
    <div class="header">
        <div class="container">
            <div class="header_navbar">
                <div class="header_navbar-logo">
                    <a href="Page d'acceuil.html"><img src="Images/logo.jpg" class="header__navbar-logo-title" width="50px"></a>
                </div>
                <div class="header_navbar-menu">
                    <a href="nouveaupdg.html" class="header__navbar--menu-link">Actualités</a>
                    <a href="dpe.html" class="header__navbar--menu-link">Test DPE</a>
                    <a href="#" class="header__navbar--menu-link">A propos de nous</a>
                    <a href="Contact.html" class="header__navbar--menu-link">Nous contactez</a>
                    <a href="payement menu navbar.html" class="header__navbar--menu-link">Faites des dons</a>
                    <a href="#" class="header__navbar--menu-link">Remerciements</a>

                </div>
            </div>
        </div>
    </div>


    <style>
        .background--custom {
          background-color: #FF0000;
          width: 100vw;
          height: 100vh;
          position: absolute;
          overflow: hidden;
          z-index: -2;
          top: 0;
          left: 0;
        }
        canvas#canvas {
          z-index: -1;
          position: absolute;
          width: 100%;
          height: 60%;
          transform: rotate(8deg) scale(2) translateY(0%);
          --gradient-color-1: #b52d5b; 
          --gradient-color-2: #9905af; 
          --gradient-color-3: #0c5dfe;  
          --gradient-color-4: #7c6733;
          --gradient-speed: 0.000012;
        }
      </style>
    </head>
    <body>
      <div class="background--custom">
        <canvas id="canvas">
      </div>
      <script src="https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js"></script>
      <script>
      var gradient = new Gradient();
      gradient.initGradient("#canvas");
      </script>

    <table>
        <tr class="ligne1">
            <th>Usage</th>
            <th>Energie d'entrée</th>
            <th>Consomation d'énergie</th>
        </tr>
     
        <tr class="ligne2">
            <td>Chauffage</td>
            <td>Fioul</td>
            <td>$chauff</td>
        </tr>
        <tr class="ligne3">
            <td>Eau chaude sanitaire</td>
            <td>Electrique</td>
            <td>$sanitaire</td>
        </tr>
        <tr class="ligne4">
            <td>Refroidissement</td>
            <td></td>
            <td>$refroi</td>
        </tr>
        <tr class="ligne5">
            <td>Eclairage</td>
            <td>Electrique</td>
            <td>$eclair)</td>
        </tr>
        <tr class="ligne6">
            <td>Auxiliaire</td>
            <td>Electrique</td>
            <td>$aux</td>
        </tr>
        <tr class="ligne7">
            <td>Energie totale pour les usages recensés</td>
            <td></td>
            <td>echo  'L énergie totale pour les usages recensées est de ' .($chauff + $sanitaire + $refroi + $eclair + $aux). ' kWh'</td>
        </tr>
     </table>

    </section>
</body>
</html>