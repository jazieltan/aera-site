<?php
if(isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "info@chinhinproperty.com";
    // $email_to = "jaziel@thisisrocketsigns.com";
    $email_subject = "Enquiry Aera Sales Page" + $name;

    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['contact_no']; // not required

    $email_message = "You got an enquiry from.\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Contact Number: ".clean_string($telephone)."\n";

// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
}
?>