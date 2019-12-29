<?php
if(!isset($_POST['send']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
{
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$business = $_POST['business'];
$email = $_POST['email'];
$message = $_POST['message'];
$submit = $_POST['submit'];
}

Validate first
if(empty($first_name)||empty($last_name)||empty($email)) 
{
    echo "First and last name and email are mandatory!";
    exit;
}

if(IsInjected($email))
{
    echo "Bad email value!";
    exit;
}

{$email_from = 'admin@annmariefoerster.com';
$subject = "New Form submission";
$email_body = "You have received a new message from $first_name at $email.\n".
    "Here is the message:\n $message";
    
$to = "admin@annmariefoerster.com";
mail( $to,$subject,$body,$headers);
$headers = "From: $email \r\n";
$headers .= "Reply-To: $email \r\n";
//done. redirect to thank-you page.
header('Location: contactme.html');
}

// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 