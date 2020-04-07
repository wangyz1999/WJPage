<?php 

if (isset($_POST["msg"]) && !empty($_POST["msg"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $msg = $_POST["msg"];

    $myFile = "msg_tmp.txt";
    $fh = fopen($myFile, 'w') or die("can't open file");
    fwrite($fh, $name."&&".$email."&&".$msg."||");
    fclose($fh);
}
else {
    $fh_read = fopen("msg_tmp.txt", 'r') or die("can't open file");
    $fh_append = fopen("msg.txt", 'a') or die("can't open file");
    fwrite($fh_append, fread($fh_read,filesize("msg_tmp.txt")));
    fclose($fh_read);
    fclose($fh_append);
    $fh_read = fopen("msg_tmp.txt", 'w') or die("can't open file");
    fclose($fh_read);

    $myFile = "msg.txt";
    $fh = fopen($myFile, 'r') or die("can't open file");
    echo fread($fh,filesize($myFile));
    fclose($fh);
}


?>

