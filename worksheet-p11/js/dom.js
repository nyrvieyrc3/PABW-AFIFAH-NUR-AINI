const wadah = document.querySelector(".katalog");
const pesanKosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");

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

function buatKartu(proyek, favorit) {
  const kartu = document.createElement("article");
  kartu.className = "kartu";

  const judul = document.createElement("h3");
  judul.textContent = proyek.nama;

  const kategori = document.createElement("p");
  kategori.textContent = `Jenis: ${proyek.kategori}`;

  const warna = document.createElement("p");
  warna.textContent = `Warna: ${proyek.warna}`;

  const tombolFavorit = document.createElement("button");
  tombolFavorit.className = "favorit";
  tombolFavorit.dataset.id = proyek.id;
  tombolFavorit.textContent = favorit.includes(proyek.id)
    ? "★ Favorit"
    : "☆ Favorit";

  kartu.append(judul, kategori, warna, tombolFavorit);

  return kartu;
}

export function render(state) {
  wadah.textContent = "";

  const daftar = state.daftarProyek.filter(
    (proyek) =>
      state.kategoriAktif === "semua" ||
      proyek.kategori === state.kategoriAktif,
  );

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
    wadah.append(buatKartu(proyek, state.favorit));
  });
}
