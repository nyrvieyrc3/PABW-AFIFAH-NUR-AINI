<script setup>
import { onMounted } from "vue";
import { profil } from "./data.js";
import { isiProyek } from "./state.js";

import KepalaProfil from "./components/KepalaProfil.vue";
import TombolFilter from "./components/TombolFilter.vue";
import DaftarProyek from "./components/DaftarProyek.vue";

onMounted(async () => {
  const response = await fetch("/data/proyek.json");
  const daftar = await response.json();
  isiProyek(daftar);
});
</script>

<template>
  <KepalaProfil :profil="profil" />

  <div>
    <h1>Koleksi Gaya Busana</h1>
  </div>

  <TombolFilter />
  <DaftarProyek />
</template>

<style scoped>
/* Biarkan kosong karena CSS sudah diimpor di main.js */
</style>
