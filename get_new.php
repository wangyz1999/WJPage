<?php
    $myFile = "msg_tmp.txt";
    $fh = fopen($myFile, 'r') or die("can't open file");
    echo fread($fh,filesize($myFile));
    fclose($fh);
?>