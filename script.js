function bukaPesan() {
    document.getElementById("pesan").classList.remove("pesan-tersembunyi");
}
function mulai() {
    document.getElementById("halaman1").classList.remove("aktif");
    document.getElementById("halaman2").classList.add("aktif");
}
function keHalaman3() {
    document.getElementById("halaman2").classList.remove("aktif");
    document.getElementById("halaman3").classList.add("aktif");
}