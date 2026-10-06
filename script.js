function mulai() {
    document.getElementById("halaman1").classList.remove("aktif");
    document.getElementById("halaman2").classList.add("aktif");
}


function bukaPesan() {
    document.getElementById("pesan").classList.remove("pesan-tersembunyi");
}


function keHalaman3() {
    document.getElementById("halaman2").classList.remove("aktif");
    document.getElementById("halaman3").classList.add("aktif");
}


function bukaFoto(foto) {
    foto.classList.toggle("foto-besar");
}


function keHalaman4() {
    document.getElementById("halaman3").classList.remove("aktif");
    document.getElementById("halaman4").classList.add("aktif");
}
function bukaSurat() {
    document.getElementById("surat").classList.add("terbuka");
}
function keHalaman5() {
    document.getElementById("halaman4").classList.remove("aktif");
    document.getElementById("halaman5").classList.add("aktif");
}

function tiupLilin() {
    document.querySelectorAll(".api").forEach(function(api) {
        api.style.display = "none";
    });

    document.getElementById("ucapanAkhir").classList.add("muncul");
}