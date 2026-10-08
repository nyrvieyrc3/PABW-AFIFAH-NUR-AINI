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

console.log(
  buatPerkenalan({
    nama: "Ayu",
    peran: "Mahasiswa Informatika",
  }),
);

console.log(
  buatPerkenalan({
    nama: "Salwa",
    peran: "Desainer Web",
  }),
);

console.log(
  buatPerkenalan({
    nama: "Afifah",
    peran: "Pengembang Web",
  }),
);
