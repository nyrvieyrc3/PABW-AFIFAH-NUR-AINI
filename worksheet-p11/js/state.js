import { render } from "./dom.js";

export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: [],
};

export function ambilState() {
  return state;
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

export function ubahKategori(kategori) {
  state.kategoriAktif = kategori;
  render(state);
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) return;

  state.favorit = [...state.favorit, id];
  render(state);
}

const KUNCI = "pabw-p11";
const VERSI = 2;

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit,
  };

  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    return JSON.parse(localStorage.getItem(KUNCI));
  } catch {
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) return;

  state.kategoriAktif = isi.kategoriAktif;
  state.favorit = isi.favorit;
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];

  render(state);
}