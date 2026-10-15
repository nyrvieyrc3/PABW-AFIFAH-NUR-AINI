import { daftarProyek } from "./app.js";

const wadah = document.querySelector(".katalog");
const pesanKosong = document.querySelector("#kosong");

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

  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

render(daftarProyek);

const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;

  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori,
  );

  render(terpilih);
  tandaiTombolAktif(tombol);
});
