<?php
//set up the connection here --> this is my local DB for now
	function connect(){
		$servername = "dbs2.eecs.utk.edu";
		$dbname = "cosc465_ssteinb2";
		$username = "ssteinb2";
		$password = "Tigers812@";
		// Create connection
		$conn = new mysqli($servername, $username, $password, $dbname);
		// Check connection
		if ($conn->connect_error) {
			die(json_encode(array('Connection failed' => $conn->connect_error)));
		}
		$conn->set_charset("utf-8");
		return $conn;
	}

	error_reporting(E_ALL); //report errors
	ini_set('display_errors', 1); //set display error mode

	$conn = connect(); //set connection
	if (!isset($_POST["sectionId"]) || $_POST["sectionId"] == '' || !is_numeric($_POST["sectionId"])){
		die (json_encode(array('Error' => 'Must enter a section ID')));
	}
	else{
		$sectionId = stripslashes(trim($_POST["sectionId"]));
	}
	if ((!isset($_POST["major"]) || $_POST["major"] == '')){
		die (json_encode(array('Error' => 'Invalid or unset major')));
	}
	else
	{
		$approvedMajors = array('CS', 'CpE', 'EE');
		if(!in_array($_POST["major"], $approvedMajors)) die (json_encode(array('Error' => 'Invalid or unset major')));
		$major = stripslashes(trim($_POST["major"]));
	}
	if (!isset($_POST["outcomeId"]) || $_POST["outcomeId"] == '' || !is_numeric($_POST["outcomeId"])){
		die (json_encode(array('Error' => 'Must enter a valid outcome ID')));
	}
	else {
		$outcomeId = stripslashes(trim($_POST["outcomeId"]));
	}
	if (!isset($_POST["weight"]) || $_POST["weight"] == '' || !is_numeric($_POST["weight"])){
		die (json_encode(array('Error' => 'Must enter a valid weight')));
	}
	else {
		$weight = stripslashes(trim($_POST["weight"]));
	}
	if (!isset($_POST["assessmentDescription"]) || $_POST["assessmentDescription"] == ''){
		die (json_encode(array('Error' => 'Bad description')));
	}
	else {
		$assessmentDescription = stripslashes(trim($_POST["assessmentDescription"]));
		$assessmentDescription = mysqli_real_escape_string($conn, $assessmentDescription);
	}
	if (!isset($_POST["assessmentId"]) || $_POST["assessmentId"] == '' || !is_numeric($_POST["assessmentId"])){
		die (json_encode(array('Error' => 'Must enter a valid number for assessment ID')));
	}
	else {
		$assessmentId = stripslashes(trim($_POST["assessmentId"]));
	}



	//set the query up, prepare the query to sanitize, bind the params, then execute. bind the results
	//...the accepted is to see if anything came up, if false the email or pass is incorrect
    $query = "INSERT INTO Assessments VALUES(?,?,?,?,?,?) 
			  ON DUPLICATE KEY UPDATE sectionId=?, outcomeId=?, major=?, weight=?, assessmentDescription=?, assessmentId=?";

	$stmt = $conn->prepare($query);
	$stmt->bind_param("iisiisiisisi", $assessmentId, $sectionId, $assessmentDescription, $weight, $outcomeId, $major, $sectionId, $outcomeId, $major, $weight, $assessmentDescription, $assessmentId);

	if ($stmt->execute()) {
		echo 1;
		$stmt->close();
	}
	else {
		echo 0;
	}
	$conn->close();
?>
