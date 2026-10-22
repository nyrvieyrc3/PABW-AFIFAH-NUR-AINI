<script setup>
import { state, tambahFavorit } from "../state.js";
import { saring } from "../data.js";

const daftarTampil = () => saring(state.daftarProyek, state.kategoriAktif);
</script>

<template>
  <div>
    <p v-if="daftarTampil().length === 0">Belum ada data.</p>

    <article v-for="proyek in daftarTampil()" :key="proyek.id" class="kartu">
      <h3>{{ proyek.nama }}</h3>
      <p>Jenis: {{ proyek.kategori }}</p>
      <p>Warna: {{ proyek.warna }}</p>

      <button @click="tambahFavorit(proyek.id)">
        {{ state.favorit.includes(proyek.id) ? "★ Favorit" : "☆ Favorit" }}
      </button>
    </article>
  </div>
</template>
