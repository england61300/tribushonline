<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $game_name = $_POST['game_name'];
    $player_id = $_POST['player_id'];
    $email = $_POST['email'];
    $confirmation = $_POST['confirmation'];

    if ($confirmation === "Yes, delete my data") {
        $to = "tribushonline@gmail.com";
        $subject = "Delete Player Data Request";
        $message = "Game Name: $game_name\nPlayer ID: $player_id\nEmail: $email\nConfirmation: $confirmation";
        $headers = "From: no-reply@tribush.com";

        if (mail($to, $subject, $message, $headers)) {
            echo "Your request has been sent.";
        } else {
            echo "There was an error sending your request. Please try again later.";
        }
    } else {
        echo "You did not confirm the deletion by typing 'Yes, delete my data'.";
    }
} else {
    echo "Invalid request method.";
}
?>
