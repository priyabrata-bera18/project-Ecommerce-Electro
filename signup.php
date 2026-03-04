<?php
include "connection.php";

if (isset($_POST['signup'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $cpassword = $_POST['cpassword'];

  if ($password !== $cpassword) {
    echo "<script>alert('Password does not match please check');window.location.href='index.html?error=password&name=$name&email=$email';</script>";
    exit();
  }
  $checksql = "SELECT * FROM signup WHERE email='$email'";

  $run = mysqli_query($conn, $checksql);
  if (mysqli_num_rows($run) <= 0) {

    $sql = "INSERT INTO signup(name,email,password) VALUES('$name','$email','$password')";
    if (mysqli_query($conn, $sql)) {
      echo "<script>alert('Registration Successful');window.location.href='index.html';</script>";
    } else {
      echo  "Error:" . mysqli_error($conn);
    }
  } else {
    echo "<script>alert('Email already exist');window.location.href='index.html?error=email&name=$name&email=$email';</script>";
  }
}
