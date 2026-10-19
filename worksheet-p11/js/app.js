import { ambilProyek } from "./api.js";
import { isiProyek, state } from "./state.js";
import { render, aturMemuat, tampilkanGalat } from "./dom.js";
import { pasangEvent } from "./events.js";

async function mulai() {
  pasangEvent();
  aturMemuat(true);

  try {
    const daftar = await ambilProyek();
    isiProyek(daftar);
    render(state);
  } catch (error) {
    tampilkanGalat("Gagal memuat data proyek.");
    console.error(error);
  } finally {
    aturMemuat(false);
  }
}

mulai();
