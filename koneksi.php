<?php

$koneksi = mysqli_connect("localhost", "root","", "data-user");

if (mysqli_connect_errno()) {

    echo "koneksi database gagal" . mysqli_connect_error();
    
}else{
    echo "koneksi database berhasil";
}



?>