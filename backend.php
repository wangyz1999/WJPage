<?php

    $host = "303.itpwebdev.com";
    $user = "zhenyiya_db_user";
    $password = "supfak-tejtub-9sogWe";
    $database = "zhenyiya_guestbook_db";

    // $conn = mysqli_connect($host,$user,$password, $database, $port);
    // if (!$conn){
    //     die('Could not connect: '.mysql_error());
    // }
    // // mysqli_select_db($conn,$database);
    // mysqli_query($conn,'SET NAMES UTF8');

    // // $query = 'SELECT * FROM guestbook';
    // $result = mysqli_query($conn,$query);
    // while(!!$row = mysqli_fetch_array($result)){
    //     echo $row["msg"];
    // }

    // Create connection
    $conn = new mysqli($host, $user, $password, $database);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO guestbook (name, email, msg)
    VALUES ('John', 'Doe@awedqw', 'qwedqwed')";

    if ($conn->query($sql) == TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();


    // $mysqli = new mysqli($host, $user, $password, $database, $port);
    // if ( $mysqli->errno ) {
    //     echo $mysqli->error;
    //     exit();
    // }

    // // if (empty($_GET)) {
    // //     // no data passed by get
    // // }
    // // echo json_encode($_GET);
    // // echo json_encode($_POST);


    var_dump($_GET);
    var_dump($_POST);

    // $sql = "SELECT * FROM guestbook";
    // $results = $mysqli->query($sql);
    // if ( !$results ) {
    //     echo $mysqli->error;
    //     exit();
    // }
    // while ($row = $results->fetch_assoc())
    // {
    //     var_dump($row);
    //     echo <hr>;
    // }
    // $mysqli->close();

    // echo "hello";

?>