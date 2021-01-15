<?php

$con = mysqli_connect('localhost','root','','Exam');
$DB = mysqli_select_db($con,"Exam")

$json = file_get_contents('C:\Users\Acer\Desktop\db php\Interviews\db');

$obj = json_decode($json,true);

$email = $_GET['email'];

$password = $GET['password'];

if(!isset($email) || !isset($password))
{
	echo json_encode(
	array('message' => 'Require Credential')
	);
}

else
{
	$query = "select * from user where email='$email' AND password='$password'";
        $result = mysqli_query($con, $query);
        $rows = mysqli_num_rows($result);
    
	if($rows == 1)
		
		{
			echo json_encode(
			array(
			'message' => 'Succssfuly Login'
			)
			);
		}
		
		else{
			echo json_encode(
			array(
			'message' => 'invalid credential'
			));
		}
}

?>