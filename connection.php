<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "electrodb";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection Failed" . mysqli_connect_error($conn));
}

// echo "Database Connected Successfully!";
