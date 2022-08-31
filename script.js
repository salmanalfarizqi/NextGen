document.getElementById("#nav-button")[0].addEventListener("click", toogleclass);

function toogleclass(){
    document.getElementById("hamburgermenu")[0].classlist.toggle('open')
    document.getElementsByClassName("menubox")[0].classlist.toggle('open')
}

window.setTimeout("waktu()",1000);
function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()",1000);
    document.getElementById("jam").innerHTML = tanggal.getHours();
    document.getElementById("menit").innerHTML = tanggal.getMinutes();
    document.getElementById("detik").innerHTML = tanggal.getSeconds();
}