<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $gameName = htmlspecialchars($_POST['game_name']);
    $playerId = htmlspecialchars($_POST['player_id']);
    $email = htmlspecialchars($_POST['email']);
    $confirmation = htmlspecialchars($_POST['confirmation']);

    // Validate the confirmation
    if ($confirmation !== "Yes, delete my data") {
        echo "You must type 'Yes, delete my data' to confirm.";
        exit;
    }

    // Set the email details
    $to = "tribushonline@gmail.com";
    $subject = "Data Deletion Request";
    $message = "Game Name: $gameName\nPlayer ID: $playerId\nEmail: $email\nConfirmation: $confirmation";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your request has been sent successfully.";
    } else {
        echo "There was an error sending your request. Please try again later.";
    }
}
?>
