<?php
//echo "<pre>";
//print_r($_POST);

//$ip=getenv("REMOTE_ADDR");

$name = $_POST['name'];

$email=$_POST['email'];

$mobile=$_POST['mobile'];

$course=$_POST['course'];

$body='Name: '.$name.'

Email: '.$email.'

mobile: '.$mobile.'

course: '.$course;


//mail($to,$subject,$message,$headers);

/*echo $body;
for($i=0; $i < $nCountries; $i++)
{
echo $aCountries[$i];}*/

//echo $body;

$to = "pawan@alivenetsolution.com";
$subject = "Enquiry Form ICT";
$message = $body;
//$headers = 'Cc: ' . "\r\n";
$headers .= 'BCC: ' . "\r\n";
$headers .= "From: ".$email;

if(mail($to,$subject,$message,$headers)){

header('location:index.html');

}else{

echo "Error";

}

?>