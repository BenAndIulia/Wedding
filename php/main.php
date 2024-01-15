<?php 
if(isset($_POST['submit'])){
    $to= "iuliaprica@yahoo.com"; 
    $from = $_POST['email']; 
    $name = $_POST['name']; 
    $subject = "Invitation"; //Write whatever you want here
    $message = $name . " is with " . $_POST['check'] . " person(s) and attends " . $_POST['check2'];
    $headers = "From:" . $from;
mail($to,$subject,$message,$headers);
//header('location: thank-you.html'); //redirects the user to another page that you made if the mail was send succesfully
} 
?>