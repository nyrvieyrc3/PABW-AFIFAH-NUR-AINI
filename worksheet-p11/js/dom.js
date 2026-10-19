const wadah = document.querySelector(".katalog");
const pesanKosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");

let semuaProyek = [];

export function aturMemuat(status) {
  if (pesanMuat) {
    pesanMuat.hidden = !status;
  }
}

export function tampilkanGalat(pesan) {
  wadah.textContent = "";

  if (pesanKosong) {
    pesanKosong.hidden = false;
    pesanKosong.textContent = pesan;
  }
}

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

export function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    if (pesanKosong) {
      pesanKosong.hidden = false;
      pesanKosong.textContent = "Belum ada data.";
    }
    return;
  }

  if (pesanKosong) {
    pesanKosong.hidden = true;
  }

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

export function simpanSemuaProyek(daftar) {
  semuaProyek = daftar;
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

const barisFilter = document.querySelector("#filter");

if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;

    const terpilih = semuaProyek.filter(
      (proyek) => kategori === "semua" || proyek.kategori === kategori,
    );

    render(terpilih);
    tandaiTombolAktif(tombol);
  });
}
