<?php 
    $fh_read = fopen("msg_tmp.txt", 'r') or die("can't open file");
    $fh_append = fopen("msg.txt", 'a') or die("can't open file");
    fwrite($fh_append, fread($fh_read,filesize("msg_tmp.txt")));
    fclose($fh_read);
    fclose($fh_append);
    $fh_read = fopen("msg_tmp.txt", 'w') or die("can't open file");
    fclose($fh_read);
}


?>

