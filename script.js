document.getElementsByClassName("toggler-navbar")[0].addEventListener("click", toogleClass);

function toogleClass() {
    document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open')
    document.getElementsByClassName("sidebar")[0].classList.toggle('open')
}

window.setTimeout("waktu()",1000);
function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()",1000);
    document.getElementById("jam").innerHTML = tanggal.getHours();
    document.getElementById("menit").innerHTML = tanggal.getMinutes();
    document.getElementById("detik").innerHTML = tanggal.getSeconds();
}