<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'ras.keks@gmail.com';
    $subject = 'New Submission from NatalieToot.com';
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email\n";
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Sorry, there was a problem sending your message.";
    }
}
?>
