<?php
$name=$_POST[];
$visitor_email=$_POST[];
$message=$_POST[];

$email_from ='info@clothingstore.com';
$email_subject='New submission form';
$email_body="User email: $visitor_email.\n".
             "user name: $name.\n".
             "user message: $message.\n";

$to= 'shaleentn@gmail.com';
$headers ="From :$email_from\r\n";   
$headers .= "Replt-To: $visitor_email \r\n";


mail($to,$email_subject,$email_body,$headers);
header("Location: win.html");















?>