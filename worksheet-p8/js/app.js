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

const daftarProyek = [
  {
    nama: "Kemeja Putih",
    kategori: "Atasan",
    warna: "Putih",
  },
  {
    nama: "Blazer Hitam",
    kategori: "Atasan",
    warna: "Hitam",
  },
  {
    nama: "Celana Jeans Biru",
    kategori: "Bawahan",
    warna: "Biru",
  },
];

console.table(daftarProyek);

const namaProyek = daftarProyek.map((proyek) => proyek.nama);

console.log(namaProyek);

const atasan = daftarProyek.filter((proyek) => proyek.kategori === "Atasan");

console.table(atasan);

const blazer = daftarProyek.find((proyek) => proyek.nama === "Blazer Hitam");

console.log(blazer);

const urut = [...daftarProyek].sort((a, b) => a.nama.localeCompare(b.nama));

console.table(urut);
console.table(daftarProyek);

console.log(profil.nama);

const elemen = document.querySelector("h1");
console.log(elemen.textContent);

const nilaiInput = "10";

console.log(Number(nilaiInput) + 5);

const salinanProfil = { ...profil };
salinanProfil.nama = "Ayu";

console.log(profil.nama);
console.log(salinanProfil.nama);
