<?php
session_start();
include 'koneksi.php';

$username = $_POST['username'];
$password = $_POST['password'];

$login = mysqli_query($koneksi, "SELECT * FROM user WHERE username='$username' AND password='$password'");

$cek = mysqli_num_rows($login);

if ($cek > 0) {
    $data = mysqli_fentch_assoc($login);

    if ($data['level']=="admin") {
        $_SESSION['username'] = $username;
        $_SESSION['level'] = "admin";

        header("location:halaman_admin.php");

    }else if($data['level']=="pegawai"){
        $_SESSION['username'] = $username;
        $_SESSION['level'] = "pegawai";

        header("location:halaman_pegawai.php");

    }else if ($data['level']=="pegurus") {
        $_SESSION['username'] = $username;
        $_SESSION['level'] = 'pengurus';

        header("location:halaman_pengurus.php");
    }
    
}else {
    header("location: indext.php?pesan=gagal");
}
?>