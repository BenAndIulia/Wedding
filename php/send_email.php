<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $attendance = $_POST["attendance"];
    $guests = $_POST["guests"];
    $message = $_POST["message"];

    $to = "iuliaprica@yahoo.com";
    $subject = "RSVP Form Submission";
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Attendance: $attendance\n";
    $email_body .= "Number of Guests: $guests\n";
    $email_body .= "Message: $message\n";

    mail($to, $subject, $email_body);
    // Redirect or display a success message after sending the email
    header("Location: gallery.html"); // Replace with your thank you page URL
    exit;
}
?>