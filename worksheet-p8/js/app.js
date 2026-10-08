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
