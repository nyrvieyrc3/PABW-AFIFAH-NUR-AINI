const profil = {
  nama: "Afifah Nur Aini",
  peran: "Mahasiswa Informatika yang tertarik pada desain web",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahKoleksi: 3,
};

const kalimat = `Nama saya ${profil.nama}, saya adalah ${profil.peran}, dan saya memiliki ${profil.keahlian.join(", ")} sebagai keahlian saya. Saat ini, saya memiliki ${profil.jumlahKoleksi} koleksi proyek yang telah saya kerjakan.`;

console.log(kalimat);

console.log(profil.nama === "Afifah Nur Aini");

const kelas = profil.kelas ?? "Belum diisi";
console.log(`Kelas: ${kelas}`);

const kota = profil.alamat?.kota;
console.log(`Kota: ${kota ?? "Belum diisi"}`);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));


import { ambilProyek } from "./api.js";
import {
  render,
  simpanSemuaProyek,
  tampilkanGalat,
  aturMemuat,
} from "./dom.js";

async function muat() {
  aturMemuat(true);

  try {
    const data = await ambilProyek();
    simpanSemuaProyek(data);
    render(data);
  } catch (galat) {
    tampilkanGalat(
      "Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.",
    );
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

muat();
