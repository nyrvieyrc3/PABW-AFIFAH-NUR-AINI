export const profil = {
  nama: "Afifah Nur Aini",
  peran: "Mahasiswa Informatika yang tertarik pada desain web",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahKoleksi: 3,
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  if (kategori === "semua") {
    return daftar;
  }

  return daftar.filter((item) => item.kategori === kategori);
}
