<?php

session_start();
if (strlen($_SESSION['map']) != 64)
  $_SESSION['map'] = 'rnbqkbnrpppppppp11111111111111111111111111111111PPPPPPPPRNBQKBNR';

if (isset($_GET['moveFigure']))
  echo 'rnbqkbnrpppppppp1111111111111111111111111111111PPPPPPPP1RNBQKBNR';

if (isset($_GET['moveFigures']))
  echo $_SESSION['map'];
