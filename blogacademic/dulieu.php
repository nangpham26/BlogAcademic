<?php include './signup.php';?>
<?php
require_once("connect.php");

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $password = $_POST['password'];

   
    $stmt = $conn->prepare("insert into dangky(firstName, lastName, email, password) values(?, ?, ?, ?)");
        $stmt->bind_param("ssss",$firstName, $lastName, $email, $password);
        $stmt->execute();

        $stmt->close();
        $conn->close();
?>