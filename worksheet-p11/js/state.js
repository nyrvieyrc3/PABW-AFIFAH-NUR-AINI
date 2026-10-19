import { render } from "./dom.js";

const state = {
  daftarProyek: [],
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}
