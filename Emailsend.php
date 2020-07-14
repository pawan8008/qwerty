<?php
//echo "<pre>";
//print_r($_POST);

//$ip=getenv("REMOTE_ADDR");

$name = $_POST['name'];

$email=$_POST['email'];

$phno=$_POST['phone'];

$msg=$_POST['msg'];

$body='Name: '.$name.'

Email: '.$email.'

Phone: '.$phno.'

Message: '.$msg;


//mail($to,$subject,$message,$headers);

/*echo $body;
for($i=0; $i < $nCountries; $i++)
{
echo $aCountries[$i];}*/

//echo $body;

$to = "sharmabaldev007@gmail.com";
$subject = "Enquiry Mail online Product";
$message = $body;
//$headers = 'Cc: ' . "\r\n";
$headers .= 'BCC: ' . "\r\n";
$headers .= "From: ".$email;

if(mail($to,$subject,$message,$headers)){

header('location:thankyou.html');

}else{

echo "Error";

}

?>
<?php include_once("analyticstracking.php") ?>
