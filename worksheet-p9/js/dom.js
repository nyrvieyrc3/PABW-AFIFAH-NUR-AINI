import { daftarProyek } from "./app.js";

const wadah = document.querySelector(".katalog");
const pesanKosong = document.querySelector("#koleksi p");

function buatKartu(proyek) {
    const kartu = document.createElement("article");
    kartu.className = "kartu";

    const judul = document.createElement("h3");
    judul.textContent = proyek.nama;

    const kategori = document.createElement("p");
    kategori.textContent = `Jenis: ${proyek.kategori}`;

    const warna = document.createElement("p");
    warna.textContent = `Warna: ${proyek.warna}`;

    kartu.append(judul, kategori, warna);

    return kartu;
}


function render(daftar) {
    wadah.textContent = "";

    pesanKosong.hidden = daftar.length > 0;

daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
    });
}

render(daftarProyek);
