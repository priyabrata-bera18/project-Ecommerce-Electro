<?php
include "connection.php";
global $conn;

if ($_SERVER['REQUEST_METHOD'] === "POST" && isset($_POST['userlogin'])) {

  $email = $_POST['email'];
  $password = $_POST['password'];
  $sql = "SELECT * FROM signup WHERE email='$email'";
  $run = mysqli_query($conn, $sql);
  if (mysqli_num_rows($run)) {

    $data = mysqli_fetch_assoc($run);
    if ($data['password'] == $password) {
      echo "<h1>Welcome" . $data['name'] . "</h1>";
    } else {
      echo "<script>alert('Password does not match');window.location.href='login.php';</script>";
    }
  } else {
    echo "<script>alert('User not exist')window.location.href='login.php';</script>;";
  }
}
