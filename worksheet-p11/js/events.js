import { tambahFavorit, ubahKategori } from "./state.js";

export function pasangEvent() {
  const katalog = document.querySelector(".katalog");
  if (!katalog) return;

  // Klik kategori
  document.addEventListener("click", (event) => {
    const tombolKategori = event.target.closest("[data-kategori]");

    if (tombolKategori) {
      ubahKategori(tombolKategori.dataset.kategori);      
      return;
    }

    // Klik favorit
    const tombolFavorit = event.target.closest(".favorit");

    if (tombolFavorit) {
      tambahFavorit(Number(tombolFavorit.dataset.id));
    }
  });
}
