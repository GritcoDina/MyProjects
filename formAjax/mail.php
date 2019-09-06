<?php

$recepient = "dina.virlan@gmail.com";
$sitename = "Landing page Dina";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$message = "Numele: $name \nTelefon: $phone \nText: $text";

$pagetitle = "Un nou mesaj de pe site \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");